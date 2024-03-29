import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { InventoryDto } from 'tools/dtos/inventory.dto';
import { InventoryModel } from 'tools/models/inventory.model';

@Injectable()
export class InventoryService extends ResourceService<
  InventoryModel,
  InventoryDto,
  InventoryDto
> {
  constructor(
    @Inject('INVENTORY_MODEL')
    private inventoryMongo: Model<InventoryModel>,
  ) {
    super(inventoryMongo);
  }
}
