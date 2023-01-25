const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({origin:true}));


app.post('/authenticate',async (req,res)=>{
    const { username } = req.body;
    return res.json({username:username,secret:'sha256'});
});


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server started at PORT',PORT);
})