import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {}
}
