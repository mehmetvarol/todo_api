var mongoose = require('mongoose')
const url = 'mongodb+srv://root:12541430@cluster0-rnwwk.mongodb.net/todo'
module.exports = () => {
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected')
  })
  mongoose.connection.on('error', err => {
    console.log('MongoDB: Error', err)
  })

  mongoose.Promise = global.Promise
}
