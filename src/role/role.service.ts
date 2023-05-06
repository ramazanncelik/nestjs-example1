import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { RoleDto } from 'tools/dtos/role.dto';
import { RoleModel } from 'tools/models/role.model';

@Injectable()
export class RoleService extends ResourceService<
  RoleModel,
  RoleDto,
  RoleDto
> {
  constructor(
    @Inject('ROLE_MODEL')
    private roleMongo: Model<RoleModel>,
  ) {
    super(roleMongo);
  }
}
