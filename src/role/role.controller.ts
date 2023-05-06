import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from 'tools/dtos/role.dto';
import { RoleModel } from 'tools/models/role.model';

@Controller('role')
export class RoleController {
    constructor(private activityService: RoleService) { }

    @Post()
    create(@Body() body: RoleDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllRoles(): Promise<RoleModel[]> {
        return this.activityService.findAll();
    }

    @Get(":id")
    getRole(@Param('id') id: string): Promise<RoleModel> {
        return this.activityService.findById(id);
    }

    @Put(":id")
    updateRole(@Param('id') id: string, @Body() body: RoleDto): Promise<any> {
        return this.activityService.update(id, body);
    }

    @Delete(":id")
    deleteRole(@Param('id') id: string): Promise<any> {
        return this.activityService.delete(id);
    }
}
