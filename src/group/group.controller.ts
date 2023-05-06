import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from 'tools/dtos/group.dto';
import { GroupModel } from 'tools/models/group.model';

@Controller('group')
export class GroupController {
    constructor(private userService: GroupService) { }

    @Post()
    create(@Body() body: GroupDto): any {
        return this.userService.create(body);
    }

    @Get()
    getAllGroups(): Promise<GroupModel[]> {
        return this.userService.findAll();
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
