import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserSchema } from './user.schema';

export type RoomDocument = RoomSchema & Document;

@Schema({ versionKey: false, collection: 'rooms' })
export class RoomSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }] })
  users: UserSchema[];

  @Prop([String])
  messages: string[];
}
