import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type RoomDocument = Room & Document;

@Schema({ versionKey: false, collection: 'rooms' })
export class Room {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  users: User[];

  @Prop([String])
  messages: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
