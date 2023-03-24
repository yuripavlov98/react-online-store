const uuid = require('uuid') // генерация id
const path = require('path') // путь к изображению
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')
class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body 
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" // генерация id
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //путь до текущей папки, вернуться на директорию выше, папка
    
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
    
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController()