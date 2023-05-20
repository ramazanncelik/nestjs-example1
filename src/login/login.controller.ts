import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("login")
@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post()
    async login(@Body() body: UserLoginDto): Promise<UserModel> {
        return this.loginService.loginUser(body);
    }

}