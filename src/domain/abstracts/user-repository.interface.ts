import { User } from '../entities';

export interface IUserRepository {
  create(user: User): Promise<User>;
}
