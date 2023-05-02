import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'tools/database/database.module';
import { LibraryModule } from 'libs/libs.module';

@Module({
  imports: [DatabaseModule, UserModule,LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
