const multer = require('multer')

//Almacenamiento en memoria
const storage = multer.memoryStorage();
cont upload = multer({ strorage });

module.exports = upload