import Joi from "joi";

const passwordComplex = Joi.string()
.min(10)
.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
.message('Password must contain at least 10 characters, including uppercase, lowercase, and number');

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplex.required(),
    is_active: Joi.boolean().required(),
    role_id: Joi.number().integer().required()
});

export const updateUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplex.optional(),
    is_active: Joi.boolean().required(),
    role_id: Joi.number().integer().required()
});