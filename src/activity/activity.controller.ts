import { Body, Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityDto } from 'tools/dtos/activity.dto';
import { ActivityModel } from 'tools/models/activity.model';
import { FilterModel } from 'tools/models/filter.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("activity")
@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService) { }

    @Post()
    create(@Body() body: ActivityDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllActivitys(@Query() query: FilterModel): Promise<ActivityModel[]> {
        return this.activityService.findAll(query);
    }

    @Get(":id")
    getActivity(@Param('id') id: string): Promise<ActivityModel> {
        return this.activityService.findById(id);
    }

    @Put(":id")
    updateActivity(@Param('id') id: string, @Body() body: ActivityDto): Promise<any> {
        return this.activityService.update(id, body);
    }

    @Delete(":id")
    deleteActivity(@Param('id') id: string): Promise<any> {
        return this.activityService.delete(id);
    }
}
