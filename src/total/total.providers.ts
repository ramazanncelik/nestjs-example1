import { Connection } from 'mongoose';
import { ActivitySchema } from 'tools/models/activity.model';
import { GroupSchema } from 'tools/models/group.model';
import { InventorySchema } from 'tools/models/inventory.model';
import { ProductSchema } from 'tools/models/product.model';
import { RoleSchema } from 'tools/models/role.model';
import { TicketSchema } from 'tools/models/ticket.model';
import { UserSchema } from 'tools/models/user.model';

export const totalsProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'ROLE_MODEL',
        useFactory: (connection: Connection) => connection.model('Role', RoleSchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'ACTIVITY_MODEL',
        useFactory: (connection: Connection) => connection.model('Activity', ActivitySchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'TICKET_MODEL',
        useFactory: (connection: Connection) => connection.model('Ticket', TicketSchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'GROUP_MODEL',
        useFactory: (connection: Connection) => connection.model('Group', GroupSchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'PRODUCT_MODEL',
        useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
        inject: ['DATABASE_CONNECTION'],
      },{
        provide: 'INVENTORY_MODEL',
        useFactory: (connection: Connection) => connection.model('Inventory', InventorySchema),
        inject: ['DATABASE_CONNECTION'],
      },
];