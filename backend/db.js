const mongoose = require('mongoose');
const { URI } = require('./config');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect(URI, options )

mongoose.connection.on('open', _ => {
    console.log('DB connected');
})