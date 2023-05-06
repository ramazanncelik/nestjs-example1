import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { ActivityDto } from 'tools/dtos/activity.dto';
import { ActivityModel } from 'tools/models/activity.model';

@Injectable()
export class ActivityService extends ResourceService<
  ActivityModel,
  ActivityDto,
  ActivityDto
> {
  constructor(
    @Inject('ACTIVITY_MODEL')
    private activityMongo: Model<ActivityModel>,
  ) {
    super(activityMongo);
  }
}
