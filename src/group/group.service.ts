import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { GroupDto } from 'tools/dtos/group.dto';
import { GroupModel } from 'tools/models/group.model';

@Injectable()
export class GroupService extends ResourceService<
  GroupModel,
  GroupDto,
  GroupDto
> {
  constructor(
    @Inject('USER_MODEL')
    private groupMongo: Model<GroupModel>,
  ) {
    super(groupMongo);
  }
}
