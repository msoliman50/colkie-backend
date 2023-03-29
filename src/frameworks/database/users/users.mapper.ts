import { User } from 'src/domain/entities';
import { UserDocument } from './user.schema';

export class UsersMapper {
  static schemaToModel(userDocument: UserDocument): User {
    return User.create(userDocument.name, userDocument._id);
  }
}
