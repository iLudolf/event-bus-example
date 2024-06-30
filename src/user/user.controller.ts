import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from 'src/common/entity-types';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  users(): Array<User> {
    return this.userService.getUsers();
  }

  @Post()
  create(@Body() createUserDto: Omit<User, 'id'>): User {
    return this.userService.createUser(createUserDto);
  }
}
