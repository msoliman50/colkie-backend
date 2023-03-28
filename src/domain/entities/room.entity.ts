import { User } from './user.entity';

export class Room {
  id: string;
  users: User[];
  messages: string[];
}
