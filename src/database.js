const mongoose = require('mongoose');

const URI = 'mongodb://localhost/going';

mongoose.connect(URI,{ useNewUrlParser: true })
.then(db => console.log('DB Connected'))
.catch( err => console.error(err));


module.exports = mongoose;