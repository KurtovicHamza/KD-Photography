const express = require('express');

const port = process.env.PORT || 55000; //this is port number



const bodyParser = require('body-parser');

const app = express(); //app or instance of express



app.use(express.json());

app.use(express.urlencoded());




app.use(express.static('public'));



app.get('/', (req,res)=>{

    res.sendFile(__dirname + '/public/index.html');

})



app.post('/formPost', (req,res)=>{

    console.log(req.body);

});



app.listen(port, ()=>{

    console.log('Server started at http://localhost:55000')

}

);
/* 
        cd C:\wamp64\www\Labs\Projects\Project5-Keno
*/
/*node app.js*/