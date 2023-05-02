import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { AuditModel } from "tools/models/audit.model";

export class ResourceService<T extends any, C extends {}, U extends any>{
    
    constructor(
        private mongoModel: Model<T>,
    ) { }

    async create(model: C): Promise<T> {
        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();

        const createdModel = new this.mongoModel({ ...model, audit });
        return await createdModel.save();
    }

    async update(id:string, body: any) {
        const data = await this.mongoModel.findByIdAndUpdate(id, body, { new: true }).exec();
        return data;
    }

    async delete(id:string): Promise<any> {
        const data = await this.mongoModel.findByIdAndDelete(id).exec();
        return data;
    }

    async findAll(): Promise<any> {
        const data = await this.mongoModel.find();
        return data;
    }

    async findById(id:string): Promise<any> {
        const data = await this.mongoModel.findById(id);
        if (data) {
            return data;
        } else {
            return "not exist";
        }
    }
}