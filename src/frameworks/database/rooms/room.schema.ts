import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from '../users/user.schema';

export type RoomDocument = RoomSchema & Document;

@Schema({ versionKey: false, collection: 'rooms' })
export class RoomSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }] })
  users: UserDocument[];

  @Prop([String])
  messages: string[];
}
