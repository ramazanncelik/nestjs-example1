import { Body, Controller, Get, Post,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() body: UserCreateDto):any {
        return this.userService.createUser(body);
    }

    @Get()
    getAllUsers(): UserModel[] {
        return this.userService.getAllUsers();
    }

    @Get(":id")
    getUser(@Param() params): UserModel {
        console.log(params)
        return this.userService.getUserById(params.id);
    }
}
