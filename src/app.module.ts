import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { appProviders } from './app.providers';
import { UploadModule } from './upload/upload.module';
import {MulterModule} from '@nestjs/platform-express'

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    LoginModule,
    RoleModule,
    ActivityModule,
    GroupModule,
    TicketModule,
    ProductModule,
    InventoryModule,
    TotalModule,
    LibraryModule,
    UploadModule,
    MulterModule.register({
      dest:'./uploads'
    })
  ],
  controllers: [AppController],
  providers: [AppService, ...appProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}