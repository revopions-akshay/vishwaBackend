const Category = require('../models/categoryModel');

const categorylist = async (req, resp) =>{
  
    let categorylist = await Category.find();
    // console.log(brandlist);
    if(categorylist.length>0){
        const r = {
            status: 200,
            message: 'success',
            description: 'Category Fetch Successfully',
            data: categorylist
        }
        resp.send(r)
        
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'No data found',
            data: categorylist
        }
        resp.send(r)
        
    }
};


const addCategory = async (req, resp) =>{
    
    let category = new Category(req.body);
    let result = await category.save();

    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Category Added Successfully',
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



const deleteCategory = async (req, resp) =>{
    
    let result = await Category.deleteOne({_id:req.params.id});
    
    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Category Deleted Successfully',
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


const categoryDetails = async (req, resp) =>{
    
    let result = await Category.findOne({_id:req.params.id});
   
    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Category Fetch Successfully',
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


const updateCategory = async (req, resp) =>{
    
    let result = await Category.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        });
  
       
        if(result){
            const r = {
                status: 200,
                message: 'success',
                description: 'Category Updated Successfully',
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
    categorylist,
    addCategory,
    deleteCategory,
    categoryDetails,
    updateCategory
 
}