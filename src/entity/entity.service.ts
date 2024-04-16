import { Injectable } from '@nestjs/common';
import { Entity } from './entity.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityDTO } from './dto/entity.dto';
import { APIFeatures } from 'src/utils/apiFeatures';

@Injectable()
export class EntityService {
  constructor(@InjectModel(Entity.name) private EntityModel: Model<Entity>) {}
  async createEntity(data: EntityDTO) {
    const entity = this.EntityModel.create(data);

    return entity;
  }

  async getEntities(query?: any) {
    const features = new APIFeatures(this.EntityModel.find(), query)
      .filter()
      .sort()
      .limit()
      .pagination();
    const entities = await features.mongooseQuery;
    return entities;
  }

  async getEntity(id) {
    const entities = await this.EntityModel.findOne({ ABN: id });
    return entities;
  }
  async getEntityCount(): Promise<number> {
    try {
      // Perform a count operation using your data access layer
      const totalCount = await this.EntityModel.countDocuments().exec();
      return totalCount;
    } catch (error) {
      // Handle any errors that occur during the operation
      console.error('Error getting expenses count:', error);
      throw error;
    }
  }
}
