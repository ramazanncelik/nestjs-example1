import { Body, Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductModel } from 'tools/models/product.model';
import { FilterModel } from 'tools/models/filter.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("product")
@Controller('product')
export class ProductController {
    constructor(private activityService: ProductService) { }

    @Post()
    create(@Body() body: ProductDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllProducts(@Query() query: FilterModel): Promise<ProductModel[]> {
        return this.activityService.findAll(query);
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
