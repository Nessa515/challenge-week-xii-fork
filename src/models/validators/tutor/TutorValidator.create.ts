import Joi from "joi";
import { ITutor } from "../../interfaces/ITutor";

export const tutorCreateValidationSchema = Joi.object<ITutor>({
    name: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().pattern(/^\d{11}$/),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    date_of_birth: Joi.date().required(),
    zip_code: Joi.string().pattern(/^\d{8}/),
});
