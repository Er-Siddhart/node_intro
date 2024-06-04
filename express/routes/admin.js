// const express =require('express');

// const router=express.Router();

// const path =require('path')

// const rootDir=require('../util/path');

// const productsControllers = require('../controllers/products');

// router.get('/add-product',productsControllers.getAddProduct);

// router.get('/',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'));
// })

// router.post('/add-product',productsControllers.postAddProduct);
// router.use('admin/add-product',(req,res,next)=>{//making a seperate filter 
//     // console.log('add-product');
//     res.send('<form action="/product" method="POST"><input type="text" name="content"><button type="submit">Add content</button> </form>')
// })

// router.use('admin/product',(req,res,next)=>{
//     console.log(req.body);
//     res.send('<h1>submitted</h1>')
// })

// module.exports=router;

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
