import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from 'src/domain/abstracts/user-repository.interface';
import { User } from 'src/domain/entities';

import { UserSchema, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(@InjectModel(UserSchema.name) userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {}
}
