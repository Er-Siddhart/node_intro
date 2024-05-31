const express=require('express');

const routerTwo=express.Router();

routerTwo.use('/add-product',(req,res,next)=>{
    // console.log('add-product');
    res.send('<form action="/product" method="POST"><input type="text" name="content"><button type="submit">Add content</button> </form>')
})

routerTwo.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>submitted</h1>')
})

module.exports=routerTwo;