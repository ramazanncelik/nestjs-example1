import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
const bcrypt = require('bcrypt');

const saltRounds = 10;
const hashText = process.env.HASH_TEXT;

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

  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
      hashPwd = hash;
    });

    return await hashPwd;
  }

  async compareHashes(password, hashed) {
    const match = await bcrypt.compareSync(`${hashText}${password}`, hashed);
    return await match;
  }

}
