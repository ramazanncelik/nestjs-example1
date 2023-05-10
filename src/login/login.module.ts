import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { DatabaseModule } from 'tools/database/database.module';
import { loginProviders } from './login.providers';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LoginController],
  providers: [
    LoginService,
    UserService,
    ...loginProviders
  ],
})
export class LoginModule {}
