const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://lpham598:lp576702@cluster0-e8abe.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'plants'
})
.then(() => console.log('Connected to MongodB'))
.catch(err => console.log(err));


