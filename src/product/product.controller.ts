import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductModel } from 'tools/models/product.model';

@Controller('product')
export class ProductController {
    constructor(private activityService: ProductService) { }

    @Post()
    create(@Body() body: ProductDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllProducts(): Promise<ProductModel[]> {
        return this.activityService.findAll();
    }

    @Get(":id")
    getProduct(@Param('id') id: string): Promise<ProductModel> {
        return this.activityService.findById(id);
    }

    @Put(":id")
    updateProduct(@Param('id') id: string, @Body() body: ProductDto): Promise<any> {
        return this.activityService.update(id, body);
    }

    @Delete(":id")
    deleteProduct(@Param('id') id: string): Promise<any> {
        return this.activityService.delete(id);
    }
}
