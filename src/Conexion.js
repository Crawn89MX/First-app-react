const mongoose = require('mongoose')

URL = ('mongodb://localhost/ensayo')

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,

})
    .then(db=>console.log('Base de datos conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose