const express =require('express');

const router=express.Router();

router.use('admin/add-product',(req,res,next)=>{//making a seperate filter 
    // console.log('add-product');
    res.send('<form action="/product" method="POST"><input type="text" name="content"><button type="submit">Add content</button> </form>')
})

router.use('admin/product',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>submitted</h1>')
})

module.exports=router;