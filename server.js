const express = require('express');
const mongoose = require('mongoose');
 const cors = require('cors');
const  app = express();

app.use(cors());

mongoose.connect('mongodb://falls:falls1234@ds147207.mlab.com:47207/falls', {useNewUrlParser:true})
mongoose.connection.once('open', () =>{
    console.log('connected to db');
});
mongoose.set('useFindAndModify', false);

app.listen(4000,() => {
    console.log('server started at port 4000');
})