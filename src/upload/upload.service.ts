import { Injectable } from "@nestjs/common";
import * as cloudinary from 'cloudinary'

@Injectable()
export class UploadService {
    constructor() {
        cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
    }

    async upload(files: any[]): Promise<any> {
        let result = [];
        try {
            for (const file of files) {
                await cloudinary.v2.uploader.upload(file.path, (error, response) => {
                    result.push(response);
                });
            }
            return await result;
        } catch (error) {
            return await error;
        }
    }

}