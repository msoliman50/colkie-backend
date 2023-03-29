import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/abstracts/user-repository.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersUseCases {
  constructor(private readonly usersRepository: IUserRepository) {}

  async createUser(createUserDto: CreateUserDto) {}
}
