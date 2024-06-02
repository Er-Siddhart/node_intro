const express=require('express');

const path=require('path');

const routerTwo=express.Router();
const rootDir=require('../util/path');


routerTwo.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
})


// routerTwo.use('/add-product',(req,res,next)=>{
//     // console.log('add-product');
//     res.send('<form action="/product" method="POST"><input type="text" name="content"><button type="submit">Add content</button> </form>')
// })

// routerTwo.use('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.send('<h1>submitted</h1>')
// })

module.exports=routerTwo;