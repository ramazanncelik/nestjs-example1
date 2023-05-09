import { Module } from '@nestjs/common';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';
import { totalsProviders } from './total.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TotalController],
  providers: [
    TotalService,
    ...totalsProviders
  ],
})
export class TotalModule {}
