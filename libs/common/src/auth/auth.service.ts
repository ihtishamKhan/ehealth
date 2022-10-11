import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../../../../src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof User,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: {
        username: username,
      },
    });

    // testing
    const saltOrRounds = 10;
    const password_test = 'random_password';
    const hash = await bcrypt.hash(password, saltOrRounds);
    console.log('hash', hash);

    const match = await bcrypt.compare(password_test, hash);
    console.log('matchhhhhhhhh', match);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('isMatch', isMatch);
    // match password with hash and salt
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return { message: 'Invalid username or password' };
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
