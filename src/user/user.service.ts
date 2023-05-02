import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Injectable()
export class UserService extends ResourceService<
  UserModel,
  UserCreateDto,
  UserUpdateDto
> {
  constructor(
    @Inject('USER_MODEL')
    private userMongo: Model<UserModel>,
  ) {
    super(userMongo);
  }
}
