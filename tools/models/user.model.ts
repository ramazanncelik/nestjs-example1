import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';
import { GroupModel } from './group.model';
import mongoose from 'mongoose'

export class UserModel {
  _id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  birthDay: Date;
  audit: AuditModel;
  roles: RoleModel[];
  groups: GroupModel[];
}

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  image: String,
  email: String,
  password: String,
  birthDay: String,
  audit: Object,
  roles: Array,
  groups: Array,
});

export interface User extends mongoose.Document {
  readonly name: string;
  readonly surname: string;
  readonly image: string;
  readonly email: string;
  readonly password: string;
  readonly birthDay: string;
  readonly audit: object;
  readonly roles: RoleModel[];
  readonly groups: GroupModel[];
}