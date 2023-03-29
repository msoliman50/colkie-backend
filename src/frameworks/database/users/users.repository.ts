import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IUserRepository } from 'src/domain/abstracts/user-repository.interface';
import { User } from 'src/domain/entities';

import { UserSchema, UserDocument } from './user.schema';
import { UsersMapper } from './users.mapper';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: Omit<User, 'id'>): Promise<User> {
    const userDocument = new this.userModel({
      ...user,
      _id: new Types.ObjectId(),
    });
    await userDocument.save();
    return UsersMapper.schemaToModel(userDocument);
  }
}
