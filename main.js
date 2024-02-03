const express=require('express');
const app=express();


const PORT=process.env.PORT||8000;
app.get('/',(req,res,next)=>{
    return res.json({
        status:'success',
        message:"Hey Im nodejs in container"
    })
})

app.listen(PORT,()=>{
    console.log(`Server started on the Port:${PORT}`)
})