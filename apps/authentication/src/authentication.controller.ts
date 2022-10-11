import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../../../src/entities/user.entity';
import { AuthenticationService } from './authentication.service';
import { UserDto } from './dto/user.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  // add routes
  //   @ApiTags('authentication')
  //   @ApiParam({ name: 'id', type: String })
  //   @ApiBody({ type: UserDto })
  @Post('signin')
  signin(@Body() userDto: UserDto): any {
    return this.authenticationService.signin(userDto);
  }

  @Post()
  @ApiTags('cats')
  @ApiBody({ type: UserDto })
  create(@Body() userDto: UserDto): Promise<User> {
    return this.authenticationService.create(userDto);
  }

  @Get()
  @ApiTags('cats')
  findAll(): Promise<User[]> {
    return this.authenticationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.authenticationService.findOne(id);
  }
}
