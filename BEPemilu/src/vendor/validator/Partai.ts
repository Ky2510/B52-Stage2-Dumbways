import Joi = require("joi")

export const PartaiValidator = Joi.object({
    name: Joi.string().required(),
    chairman: Joi.string().required(),
    vision_mission: Joi.string().required(),
    address: Joi.string().required(),
    paslonId: Joi.number().when('id', { 
        is: null, 
        then: Joi.number().required().error(new Error('Id paslon not found'))
    })
})