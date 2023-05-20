import { AuditModel } from './audit.model';

export class InventoryTypeModel {
  _id: string;
  name: string;
  audit: AuditModel;
}