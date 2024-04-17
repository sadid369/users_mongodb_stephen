const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: String
});


const User = mongoose.model('User', userSchema);
module.exports = User;