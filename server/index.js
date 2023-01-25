const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');


app.use(express.json());
app.use(cors({origin:true}));


app.post('/authenticate',async (req,res)=>{
    const { username } = req.body;
    const ENDPOINT = 'https://api.chatengine.io/users/'

    try {
      
        const rest = await axios.put(ENDPOINT,{
            username: username, secret: username, first_name: username
        },
        {headers: { "Private-Key": "2daa6403-b447-4d88-9c40-660ac30177e9" }}
        );
      
      return res.status(rest.status).json(rest.data);  
    }
    catch (error) {
      return res.status(error.response.status).json(error.response.data);
    };
});


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server started at PORT',PORT);
})