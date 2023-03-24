const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

router.post('/', brandController.create) // создать
router.get('/', brandController.getAll) // получить

module.exports = router