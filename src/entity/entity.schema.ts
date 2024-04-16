import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AddressDTO, GSTDTO } from './dto/entity.dto';

export type EntityDocument = HydratedDocument<Entity>;

@Schema({ collection: 'entities' })
export class Entity {
  @Prop({
    trim: true,
    required: [true, 'ABN is required'],
  })
  ABN: string;

  @Prop({
    min: 0,
    required: [true, 'ABNStatus is required'],
  })
  ABNStatus: number;

  @Prop({
    type: String,
    trim: true,
    required: [true, 'ABNStatusFromDate is required'],
  })
  ABNStatusFromDate: string;

  @Prop({
    type: String,
    trim: true,
    //required: [true, 'EntityTypeInd is required'],
  })
  EntityTypeInd: string;

  @Prop({
    type: String,
    trim: true,
    //required: [true, 'EntityTypeText is required'],
  })
  EntityTypeText: string;

  @Prop({
    type: String,
    default: Date.now,
  })
  NonIndividualNameText: any;

  @Prop({ type: String, trim: true })
  GivenName: string;

  @Prop()
  FamilyName: string;

  @Prop()
  BusinessAddress: AddressDTO;

  @Prop()
  GST: GSTDTO;

  @Prop()
  updated: Date;

  @Prop({
    type: Date,
    default: Date.now,
  })
  created: Date;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
