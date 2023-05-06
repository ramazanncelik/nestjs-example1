import { Connection } from 'mongoose';
import { TicketSchema } from 'tools/models/ticket.model';

export const ticketsProviders = [
  {
    provide: 'TICKET_MODEL',
    useFactory: (connection: Connection) => connection.model('Ticket', TicketSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];