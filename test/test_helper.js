const mongoose = require('mongoose')

before((done) => {
    mongoose.connect('mongodb://localhost:27017/user_test')
    mongoose.connection.once('open', () => {
        done();
    }).on('error', (error) => {
        console.warn('Warning', error)
    })
})


beforeEach((done) => {
    mongoose.connection.collections.users.drop().then(() => {
        done();
    });

})