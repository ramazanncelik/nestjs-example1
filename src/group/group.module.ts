import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { groupsProviders } from './group.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GroupController],
  providers: [
    GroupService,
    ...groupsProviders
  ],
})
export class GroupModule {}
