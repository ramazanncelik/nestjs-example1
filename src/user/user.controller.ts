import { Body, Controller, Get, Post, Put, Delete, Param, UseFilters, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { FilterModel } from 'tools/models/filter.model';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() body: UserCreateDto): Promise<any> {
        body.password = await this.userService.convertToHash(body.password);
        return this.userService.create(body);
    }

    @Get()
    async getAllUsers(@Query() query: FilterModel): Promise<UserModel[]> {
        return this.userService.findAll(query);
    }

    @Get(":id")
    async getUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.findById(id);
    }

    @Put(":id")
    async updateUser(@Param('id') id: string, @Body() body: UserUpdateDto): Promise<any> {
        return this.userService.update(id, body);
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}
