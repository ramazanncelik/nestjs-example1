import { Connection } from 'mongoose';
import { InventorySchema } from 'tools/models/inventory.model';

export const inventorysProviders = [
  {
    provide: 'INVENTORY_MODEL',
    useFactory: (connection: Connection) => connection.model('Inventory', InventorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];