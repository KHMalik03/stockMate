const express = require('express');
const app = express();

/* setting up the view engine */
app.set('view engine', 'ejs');

/* setting static routes */
app.use('/public', express.static('public'));

/* clients route */
const clientsRouter = require('../routes/clients.routes')
app.use(clientsRouter)

app.listen(3000, () => {
    console.log("Server started at: http://localhost:3000");
}) 
