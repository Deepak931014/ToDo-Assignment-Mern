const mongoose = require('mongoose')

const url = process.env.URL;

module.exports = mongoose.connect(url).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error('Error connecting to database:', err);
})