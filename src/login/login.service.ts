import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Injectable()
export class LoginService {
    constructor(
        @Inject('USER_MODEL')
        private userMongo: Model<UserModel>,
        private userService: UserService
    ) { }

    async loginUser(user: UserLoginDto): Promise<any> {
        try {
            const existUser = await this.userMongo.findOne({
                email: user.email
            }).exec();
            if (existUser) {
                let checkPwd;
                await this.userService.compareHashes(user.password, existUser.password).then(response => {
                    if (response) {
                        checkPwd = true;
                    } else {
                        checkPwd = false;
                    }
                });

                if (checkPwd) {
                    return await { success: true, value: existUser };
                } else {
                    return await { success: false, response: "user password is incorrect!" };
                }
            } else {
                return await { success: false, response: "user does not exist!" };
            }
        } catch (error) {
            return await { success: false, response: "something went wrong while login process!", expection: error };
        }
    }

}
