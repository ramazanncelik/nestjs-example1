import { AuditModel } from './audit.model';

export class ProductTypeModel {
  _id: string;
  name: string;
  audit: AuditModel;
}