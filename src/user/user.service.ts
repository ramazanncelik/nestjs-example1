import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { AuditModel } from 'tools/models/audit.model';
import { User } from 'tools/models/user.model';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) { }

  async findAll(): Promise<any> {
    const users = await this.userModel.find();
    return users;
  }

  async findById(id): Promise<any> {
    const userMongo = await this.userModel.findById(id);
    if (userMongo) {
      return userMongo;
    } else {
      return "user does not exist";
    }
  }



  async createUser(body: UserCreateDto) {
    const isExistMongo = await this.userModel.findOne({ email: body.email });
    if (isExistMongo) {
      return "There is already a user using the e-mail address you entered, please try with another e-mail.";
    } else {
      const audit = new AuditModel();
      audit.active = true;
      audit.createdBy = "Admin";
      audit.createdDate = new Date();

      this.creatingUser({ ...body, audit });
      const user = await this.userModel.findOne(body);
      return user;
    }
  }

  private async creatingUser(data: any) {
    const newUser = new this.userModel(data);
    await newUser.save();
  }

  async updateUser(id, body: any) {
    const user = await this.userModel.findByIdAndUpdate(id, body, { new: true }).exec();
    return user;
  }

  async deleteUser(id): Promise<any> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    return user;
  }
}
