import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserSchema & Document;

@Schema({ versionKey: false, collection: 'users' })
export class UserSchema {
  @Prop({ required: true })
  name: string;
}
