import { User } from './user.entity';

export class Room {
  id: string;
  name: string;
  users: User[];
  messages: string[];

  private constructor(
    name: string,
    users?: User[],
    messages?: string[],
    id?: string,
  ) {
    this.name = name;
    this.users = users;
    this.messages = messages;
    this.id = id;
  }
}
