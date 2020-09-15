function dbConnect(){
    const mongoose = require('mongoose')
    const url = 'mongodb+srv://varun:varun123@cluster0.sxxuv.mongodb.net/comments?retryWrites=true&w=majority'

     mongoose.connect(url, {
         useNewUrlParser : true,
         useUnifiedTopology:true,
         useFindAndModify:true
     }) 
     
     const connection = mongoose.connection
     connection.once('open', function(){
         console.log('Database connected..')
     }).catch(function(err){

        console.log('connection failed...')

     })
}

module.exports= dbConnect