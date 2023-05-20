import { Body, Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from 'tools/dtos/role.dto';
import { RoleModel } from 'tools/models/role.model';
import { FilterModel } from 'tools/models/filter.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("role")
@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) { }

    @Post()
    create(@Body() body: RoleDto): any {
        return this.roleService.create(body);
    }

    @Get()
    getAllRoles(@Query() query: FilterModel): Promise<RoleModel[]> {
        return this.roleService.findAll(query);
    }

    @Get(":id")
    getRole(@Param('id') id: string): Promise<RoleModel> {
        return this.roleService.findById(id);
    }

    @Put(":id")
    updateRole(@Param('id') id: string, @Body() body: RoleDto): Promise<any> {
        return this.roleService.update(id, body);
    }

    @Delete(":id")
    deleteRole(@Param('id') id: string): Promise<any> {
        return this.roleService.delete(id);
    }
}
