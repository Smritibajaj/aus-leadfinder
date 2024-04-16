import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { APIFeatures } from 'src/utils/apiFeatures';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  async createUser(data: UserDto) {
    const user = this.UserModel.create(data);
    return user;
  }

  async getUsers(query?: any) {
    const features = new APIFeatures(this.UserModel.find(), query)
      .filter()
      .sort()
      .limit()
      .pagination();
    const users = await features.mongooseQuery;
    return users;
  }
}
