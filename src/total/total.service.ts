import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ActivityModel } from 'tools/models/activity.model';
import { GroupModel } from 'tools/models/group.model';
import { InventoryModel } from 'tools/models/inventory.model';
import { ProductModel } from 'tools/models/product.model';
import { RoleModel } from 'tools/models/role.model';
import { TicketModel } from 'tools/models/ticket.model';
import { UserModel } from 'tools/models/user.model';

@Injectable()
export class TotalService {
    constructor(
        @Inject('USER_MODEL')
        private userMongo: Model<UserModel>,
        @Inject('ROLE_MODEL')
        private roleMongo: Model<RoleModel>,
        @Inject('ACTIVITY_MODEL')
        private activityMongo: Model<ActivityModel>,
        @Inject('TICKET_MODEL')
        private ticketMongo: Model<TicketModel>,
        @Inject('GROUP_MODEL')
        private groupMongo: Model<GroupModel>,
        @Inject('PRODUCT_MODEL')
        private productMongo: Model<ProductModel>,
        @Inject('INVENTORY_MODEL')
        private inventoryMongo: Model<InventoryModel>,
    ) { }

    async findAll(): Promise<any> {
        const userCount = await this.userMongo.countDocuments({}).exec();
        const roleCount = await this.roleMongo.countDocuments({}).exec();
        const activityCount = await this.activityMongo.countDocuments({}).exec();
        const ticketCount = await this.ticketMongo.countDocuments({}).exec();
        const groupCount = await this.groupMongo.countDocuments({}).exec();
        const productCount = await this.productMongo.countDocuments({}).exec();
        const inventoryCount = await this.inventoryMongo.countDocuments({}).exec();

        return await {
            user: userCount,
            role: roleCount,
            activity: activityCount,
            ticket: ticketCount,
            group: groupCount,
            product: productCount,
            inventory: inventoryCount
        }
    }
}
