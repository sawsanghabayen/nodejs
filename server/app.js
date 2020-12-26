const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    var name = req.param('name');
    res.json({message:"Hello" +name
  });
    
    //res.send('Hello' +name); 
});

app.post('/user',(req,res)=>{
  //console.log('body is ',req.body);
  const data =req.body;
    res.send(data); 
});


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

