import { Body, Controller, Get, Post, Put, Delete, Param,Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketCreateDto,TicketUpdateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/models/ticket.model';
import { FilterModel } from 'tools/models/filter.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ticket")
@Controller('ticket')
export class TicketController {
    constructor(private activityService: TicketService) { }

    @Post()
    create(@Body() body: TicketCreateDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllTickets(@Query() query: FilterModel): Promise<TicketModel[]> {
        return this.activityService.findAll(query);
    }

    @Get(":id")
    getTicket(@Param('id') id: string): Promise<TicketModel> {
        return this.activityService.findById(id);
    }

    @Put(":id")
    updateTicket(@Param('id') id: string, @Body() body: TicketUpdateDto): Promise<any> {
        return this.activityService.update(id, body);
    }

    @Delete(":id")
    deleteTicket(@Param('id') id: string): Promise<any> {
        return this.activityService.delete(id);
    }
}
