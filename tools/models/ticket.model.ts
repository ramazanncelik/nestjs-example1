import { AuditModel } from './audit.model';
import { ActivityModel } from './activity.model';
import { InventoryModel } from './inventory.model';
import { TicketTypeModel } from './ticket-type.model';
import { UserModel } from './user.model';
import mongoose from 'mongoose';

export class TicketModel {
  _id: string;
  name: string;
  description: string;
  type: TicketTypeModel;
  responsible: UserModel;
  audit: AuditModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}

export const TicketSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: Object,
  responsible: Object,
  audit: Object,
  activities: Array,
  inventories: Array,
});