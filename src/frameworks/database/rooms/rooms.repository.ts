import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IRoomRepository } from 'src/domain/abstracts/room-repository.interface';
import { Room } from 'src/domain/entities';

import { RoomSchema, RoomDocument } from './room.schema';
import { RoomsMapper } from './rooms.mapper';

@Injectable()
export class RoomsRepository implements IRoomRepository {
  constructor(
    @InjectModel(RoomSchema.name)
    private readonly roomModel: Model<RoomDocument>,
  ) {}

  async create(room: Omit<Room, 'id'>): Promise<Room> {
    const roomDocument = new this.roomModel({
      ...room,
      _id: new Types.ObjectId(),
    });
    await roomDocument.save();
    return RoomsMapper.schemaToModel(roomDocument);
  }
  async update(id: string, room: Room): Promise<Room> {
    return new Room();
  }
  async findById(id: string): Promise<Room> {
    return new Room();
  }
}
