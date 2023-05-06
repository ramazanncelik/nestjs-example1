import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketCreateDto,TicketUpdateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/models/ticket.model';

@Controller('ticket')
export class TicketController {
    constructor(private activityService: TicketService) { }

    @Post()
    create(@Body() body: TicketCreateDto): any {
        return this.activityService.create(body);
    }

    @Get()
    getAllTickets(): Promise<TicketModel[]> {
        return this.activityService.findAll();
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
