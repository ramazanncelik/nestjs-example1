import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { rolesProviders } from './role.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [
    RoleService,
    ...rolesProviders
  ],
})
export class RoleModule {}
