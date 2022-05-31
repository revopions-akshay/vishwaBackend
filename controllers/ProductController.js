const Products = require('../models/productModel');

const productlist = async (req, resp) =>{
  
    let productlist = await Products.find();
    // console.log(brandlist);
    if(productlist.length>0){
        const r = {
            status: 200,
            message: 'success',
            description: 'Products Fetch Successfully',
            data: productlist
        }
        resp.send(r)
        
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'No data found',
            data: productlist
        }
        resp.send(r)
        
    }
};


const addProduct = async (req, resp) =>{
    
    let product = new Products(req.body);
    let result = await product.save();

    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Product Added Successfully',
            data: result
        }
        resp.send(r)
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'There is some error',
            data: result
        }
        resp.send(r) 
    }
};



const deleteProduct = async (req, resp) =>{
    
    let result = await Products.deleteOne({_id:req.params.id});
    
    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Product Deleted Successfully',
            data: result
        }
        resp.send(r)
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'There is some error',
            data: result
        }
        resp.send(r) 
    }

};


const productDetails = async (req, resp) =>{
    
    let result = await Products.findOne({_id:req.params.id});
   
    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Product Fetch Successfully',
            data: result
        }
        resp.send(r)
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'No Details Found',
            data: result
        }
        resp.send(r) 
    }

    
};


const updateProduct = async (req, resp) =>{
    
    let result = await Products.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        });
  
       
        if(result){
            const r = {
                status: 200,
                message: 'success',
                description: 'Product Updated Successfully',
                data: result
            }
            resp.send(r)
        }else{
            const r = {
                status: 200,
                message: 'failed',
                description: 'There is some error.',
                data: result
            }
            resp.send(r) 
        }

    
};




module.exports = {
    productlist,
    addProduct,
    deleteProduct,
    productDetails,
    updateProduct 
}