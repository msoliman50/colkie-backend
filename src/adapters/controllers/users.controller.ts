import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/domain/entities';
import { UsersUseCases } from 'src/usecases/users/users.usecases';
import { CreateUserDto } from 'src/usecases/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = User();
  }
}
