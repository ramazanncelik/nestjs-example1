import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'tools/database/database.module';
import { LibraryModule } from 'libs/libs.module';
import { TotalModule } from './total/total.module';
import { RoleModule } from './role/role.module';
import { ActivityModule } from './activity/activity.module';
import { GroupModule } from './group/group.module';
import { TicketModule } from './ticket/ticket.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [DatabaseModule, UserModule, LoginModule, RoleModule, ActivityModule, GroupModule, TicketModule, ProductModule, InventoryModule, TotalModule, LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
