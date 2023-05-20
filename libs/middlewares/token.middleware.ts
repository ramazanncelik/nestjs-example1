import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import *as jwt from 'jsonwebtoken'

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        const authJsonWebToken = req.headers.authorization;
        if (req.url !== "/api/login") {
            if (!authJsonWebToken) {
                throw new HttpException(
                    'Jwt count not found!',
                    HttpStatus.FORBIDDEN
                );
            } else {
                try {
                    const user = jwt.verify(authJsonWebToken.slice(7), process.env.JWT_TEXT);
                    if (user) {
                        req['user'] = user;
                        next();
                    } else {
                        throw new HttpException(
                            'Something went wrong!',
                            HttpStatus.GATEWAY_TIMEOUT
                        );
                    }
                } catch (error) {
                    throw new HttpException(
                        error.message,
                        HttpStatus.UNAUTHORIZED
                    );
                }
            }
        } else {
            next();
        }
    }
}
