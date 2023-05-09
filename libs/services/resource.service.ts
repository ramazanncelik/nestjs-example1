import { FilterQuery, Model, SortOrder } from "mongoose";
import { AuditModel } from "tools/models/audit.model";
import { FilterModel } from "tools/models/filter.model";

export class ResourceService<T extends any, C extends {}, U extends any>{

    constructor(
        private mongoModel: Model<T>,
    ) { }

    generalSearchQuery = {
        page: 1,
        size: 10,
        sort: "asc" as SortOrder,
        sortBy: "_id",
        queryText: "",
        searchBy: "name"
    }

    async create(model: C): Promise<T> {
        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();

        const createdModel = new this.mongoModel({ ...model, audit });
        return await createdModel.save();
    }

    async update(id: string, body: any) {
        const data = await this.mongoModel.findByIdAndUpdate(id, body, { new: true }).exec();
        return data;
    }

    async delete(id: string): Promise<any> {
        const data = await this.mongoModel.findByIdAndDelete(id).exec();
        return data;
    }

    async findAll(query?: FilterModel): Promise<any> {
        if (Object.keys(query).length !== 0) {
            const searchValue = { ...this.generalSearchQuery, ...query };
            const userRegex = new RegExp(searchValue.queryText, 'i');
            const filter: FilterQuery<any> = {
                [searchValue.searchBy]: { $regex: userRegex },
            };
            return await this.mongoModel
                .find(filter)
                .limit(Math.max(0, searchValue.size))
                .skip(searchValue.size * (searchValue.page - 1))
                .sort([[`${searchValue.sortBy}`, searchValue.sort as SortOrder]])
                .exec();
        } else {
            const count = await this.mongoModel.countDocuments({}).exec();
            const data = await this.mongoModel.find()
                .limit(Math.max(0, this.generalSearchQuery.size))
                .skip(this.generalSearchQuery.size * (this.generalSearchQuery.page - 1))
                .exec();
            return [
                {
                    success: true,
                    size: this.generalSearchQuery.size,
                    total: count,
                    data: data,
                },
            ];
        }
    }


    async findById(id: string): Promise<any> {
        const data = await this.mongoModel.findById(id);
        if (data) {
            return data;
        } else {
            return "not exist";
        }
    }
}
