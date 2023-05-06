import { Body, Controller, Get, Post, Put, Delete, Param, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() body: UserCreateDto): any {
        return this.userService.create(body);
    }

    @Get()
    getAllUsers(): Promise<UserModel[]> {
        return this.userService.findAll();
    }

    @Get(":id")
    getUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.findById(id);
    }

    @Put(":id")
    updateUser(@Param('id') id: string, @Body() body: UserUpdateDto): Promise<any> {
        return this.userService.update(id, body);
    }

    @Delete(":id")
    deleteUser(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}
