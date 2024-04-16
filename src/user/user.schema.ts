import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  company: string;

  @Prop()
  updated: Date;

  @Prop({
    type: Date,
    default: Date.now,
  })
  created: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
