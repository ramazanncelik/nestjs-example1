import { Connection } from 'mongoose';
import { ActivitySchema } from 'tools/models/activity.model';

export const activitysProviders = [
  {
    provide: 'ACTIVITY_MODEL',
    useFactory: (connection: Connection) => connection.model('Activity', ActivitySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];