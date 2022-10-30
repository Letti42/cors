const app = require('express')();
app.listen(process.env.PORT || 3000);

app.get('/', (req,res)=>{
    res.status(200).send('Hello there!');
})

