const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/campio');
    console.log('mongo is connected');
}

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({title:'big bend', location: 'tx'});
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log('serving on port 3000');
})