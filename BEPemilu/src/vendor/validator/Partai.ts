import Joi = require("joi")

export const PartaiValidator = Joi.object({
    name: Joi.string().required(),
    chairname: Joi.string().required(),
    vision_mission: Joi.string().required(),
    address: Joi.string().required()
})