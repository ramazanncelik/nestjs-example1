import { RoleDto } from './role.dto';

export class GroupCreateDto {
  name: string;
  description: string;
}

// tslint:disable-next-line: max-classes-per-file
export class GroupRolesDto {
  roles: RoleDto[];
}
