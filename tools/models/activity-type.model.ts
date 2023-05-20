import { AuditModel } from './audit.model';

export class ActivityTypeModel {
  _id: string;
  name: string;
  audit: AuditModel;
}