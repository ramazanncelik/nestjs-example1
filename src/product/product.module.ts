import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productsProviders } from './product.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    ...productsProviders
  ],
})
export class ProductModule {}
