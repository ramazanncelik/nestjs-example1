import { Inject, Injectable } from '@nestjs/common';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { TicketCreateDto, TicketUpdateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/models/ticket.model';

@Injectable()
export class TicketService extends ResourceService<
  TicketModel,
  TicketCreateDto,
  TicketUpdateDto
> {
  constructor(
    @Inject('TICKET_MODEL')
    private ticketMongo: Model<TicketModel>,
  ) {
    super(ticketMongo);
  }
}
