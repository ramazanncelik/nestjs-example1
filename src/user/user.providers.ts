import { Connection } from 'mongoose';
import { UserSchema } from 'tools/models/user.model';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];