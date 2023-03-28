import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoomRepository } from 'src/domain/abstracts/room-repository.interface';
import { Room } from 'src/domain/entities';

import { RoomSchema, RoomDocument } from '../schemas/room.schema';

@Injectable()
export class RoomsRepository implements IRoomRepository {
  constructor(@InjectModel(RoomSchema.name) roomModel: Model<RoomDocument>) {}

  async create(room: Room): Promise<Room> {}
  async update(id: string, room: Room): Promise<Room> {}
  async findById(id: string): Promise<Room> {}
}
