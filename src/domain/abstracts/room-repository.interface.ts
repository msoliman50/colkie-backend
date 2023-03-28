import { Room } from '../entities';

export interface IRoomRepository {
  create(room: Room): Promise<Room>;
  findById(id: string): Promise<Room>;
  update(id: string, room: Room): Promise<Room>;
}
