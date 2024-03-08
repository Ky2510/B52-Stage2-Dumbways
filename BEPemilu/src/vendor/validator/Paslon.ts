import Joi = require("joi")

export const PaslonValidator = Joi.object({
    name: Joi.string().required(),
    serial_number: Joi.string().required(),
    vision_mission: Joi.string().required(),
})