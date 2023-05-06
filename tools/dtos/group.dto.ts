import { RoleDto } from './role.dto';

export class GroupDto {
  name: string;
  description: string;
  roles: RoleDto[];
}