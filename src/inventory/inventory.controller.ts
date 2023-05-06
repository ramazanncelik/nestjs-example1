import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryDto } from 'tools/dtos/inventory.dto';
import { InventoryModel } from 'tools/models/inventory.model';

@Controller('inventory')
export class InventoryController {
    constructor(private activityService: InventoryService) { }

    @Post()
    create(@Body() body: InventoryDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllInventorys(): Promise<InventoryModel[]> {
        return this.activityService.findAll();
    }

    @Get(":id")
    getInventory(@Param('id') id: string): Promise<InventoryModel> {
        return this.activityService.findById(id);
    }

    @Put(":id")
    updateInventory(@Param('id') id: string, @Body() body: InventoryDto): Promise<any> {
        return this.activityService.update(id, body);
    }

    @Delete(":id")
    deleteInventory(@Param('id') id: string): Promise<any> {
        return this.activityService.delete(id);
    }
}