var mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb+srv://root:12541430@cluster0-rnwwk.mongodb.net/todo?retryWrites=true&w=majority", {useNewUrlParser: true});

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}
