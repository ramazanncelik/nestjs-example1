import { Connection } from 'mongoose';
import { GroupSchema } from 'tools/models/group.model';

export const groupsProviders = [
  {
    provide: 'GROUP_MODEL',
    useFactory: (connection: Connection) => connection.model('Group', GroupSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];