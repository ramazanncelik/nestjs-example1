import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { ticketsProviders } from './ticket.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TicketController],
  providers: [
    TicketService,
    ...ticketsProviders
  ],
})
export class TicketModule {}
