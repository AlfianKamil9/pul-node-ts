import { Request,Response, NextFunction } from "express";
import { Schema } from "joi";
import ApiResponse from "../../helpers/ApiResponse";


export const Validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        const err = error.details.map(err => err.message).join(', ');
        console.log(err);
        return res.status(400).json(ApiResponse.response400(err, 'Validation Error'))
    }
    next()
}