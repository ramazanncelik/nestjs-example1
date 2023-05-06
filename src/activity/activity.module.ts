import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { activitysProviders } from './activity.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityController],
  providers: [
    ActivityService,
    ...activitysProviders
  ],
})
export class ActivityModule {}
