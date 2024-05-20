const express = require('express');
const app = express();
const sql = require('sql');
sql.setDialect(/* 'possible dialects: mssql, mysql, postgres (default), sqlite' */);


/* define table with one table(exemple)*/
const user = sql.define({
    name : 'table name',
    columns : ['col 1','col 2','col 3']
})

/* setting up the view engine */
app.set('view engine', 'ejs');

/* setting static routes */
app.use('/public', express.static('public'));



/* setting route for user search and filtring */
app.get('/users', (req, res) => {
    res.render('userPageFileName', {
        user: user
    })
})

/* setting up route for searching by name */
app.get('/user/:id/delete',(req,res)=>{
    let userId = req.params.id;
    let user = user.colname.find(user=>user.id ==userId);

    if(user){
        /* DELETE FROM USER WHERE userId=ID */
    }
})