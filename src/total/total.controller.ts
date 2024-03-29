import { Controller, Get, Query } from '@nestjs/common';
import { TotalService } from './total.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("total")
@Controller('total')
export class TotalController {
    constructor(private totalService: TotalService) { }

    @Get()
    getAllTotals(): Promise<any[]> {
        return this.totalService.findAll();
    }

}
