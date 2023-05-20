import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from "libs/guards/auth.guard";

export const appProviders = [
    {
        provide: APP_GUARD,
        useClass: AuthGuard,
    },
]