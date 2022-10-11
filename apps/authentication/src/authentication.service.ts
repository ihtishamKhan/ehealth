import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from '../../../src/entities/user.entity';
import { AuthService } from '@app/common/auth/auth.service';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof User,
    private authService: AuthService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  async signin(userDto: UserDto): Promise<{}> {
    // unhashed password
    const { username, password } = userDto;

    return this.usersRepository
      .findOne({
        where: {
          username: userDto.username,
        },
      })
      .then((user) => {
        if (!user) {
          throw new Error('User not found!');
        } else if (user.isActive === false) {
          throw new Error('User is not active');
        } else {
          return this.authService.validateUserCredentials(username, password);
        }
      })
      .catch((err) => {
        return {
          statuscode: 401,
          message: err.message,
          result: null,
        };
      });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  create(userDto: UserDto): Promise<User> {
    return this.usersRepository.create<User>({ ...userDto });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }
}
