import mongoose from 'mongoose';
import { AuditModel } from './audit.model';
import { ProductTypeModel } from './product-type.model';

export class ProductModel {
  id: string;
  name: string;
  audit: AuditModel;
  type: ProductTypeModel;
}

export const ProductSchema = new mongoose.Schema({
  name: String,
  audit: Object,
  type: Object,
});