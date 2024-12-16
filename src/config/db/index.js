const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://root:123@thanhtuan.r4zm7.mongodb.net/f8?retryWrites=true&w=majority&appName=thanhtuan');
        console.log('connect successfully')
    }catch(error) {
        console.log('connect failure')
    }
}
module.exports = { connect };