import { Body, Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from 'tools/dtos/group.dto';
import { GroupModel } from 'tools/models/group.model';
import { FilterModel } from 'tools/models/filter.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("group")
@Controller('group')
export class GroupController {
    constructor(private userService: GroupService) { }

    @Post()
    create(@Body() body: GroupDto): any {
        return this.userService.create(body);
    }

    @Get()
    getAllGroups(@Query() query: FilterModel): Promise<GroupModel[]> {
        return this.userService.findAll(query);
    }

    @Get(":id")
    getGroup(@Param('id') id: string): Promise<GroupModel> {
        return this.userService.findById(id);
    }

    @Put(":id")
    updateGroup(@Param('id') id: string, @Body() body: GroupDto): Promise<any> {
        return this.userService.update(id, body);
    }

    @Delete(":id")
    deleteGroup(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}
