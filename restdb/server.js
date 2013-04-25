//for now just a quick REST back end for Mocking/Tests

var express = require('express'),
    accounts = require('./accounts');
 
var app = express();
 
app.get('/accounts', accounts.findAll);
app.get('/accounts/:id', accounts.findById);
 

// app.post('/accounts', accounts.addWine);
// app.put('/accounts/:id', accounts.updateWine);
// app.delete('/accounts/:id', accounts.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');