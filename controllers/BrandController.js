const Brand = require('../models/brandModel');

const brandlist = async (req, resp) =>{
  
    let brandlist = await Brand.find();
    // console.log(brandlist);
    if(brandlist.length>0){
        const r = {
            status: 200,
            message: 'success',
            description: 'Brand Fetch Successfully',
            data: brandlist
        }
        resp.send(r)
    }else{
        const r = {
            status: 200,
            message: 'failed',
            description: 'No Brands found',
            data: brandlist
        }
        resp.send(r)
    }
};


const addbrand = async (req, resp) =>{
    
    let brand = new Brand(req.body);
    let result = await brand.save();
 

    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Brand Added Successfully',
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



const deletebrand = async (req, resp) =>{
    
    let result = await Brand.deleteOne({_id:req.params.id});
    resp.send(result.deletedCount);
    
    // if(result){
    //     const r = {
    //         status: 200,
    //         message: 'success',
    //         description: 'Brand Deleted Successfully',
    //         data: result
    //     }
    //     resp.send(r)
    // }else{
    //     const r = {
    //         status: 200,
    //         message: 'failed',
    //         description: 'There is some error',
    //         data: result
    //     }
    //     resp.send(r)
    // }


};


const BrandDetails = async (req, resp) =>{
   
    let result = await Brand.findOne({_id:req.params.id});
   
    if(result){
        const r = {
            status: 200,
            message: 'success',
            description: 'Brand Details Fetch Successfully',
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


const UpdateBrand = async (req, resp) =>{
    
    let result = await Brand.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        });
  
        // resp.send(result);
        if(result){
            const r = {
                status: 200,
                message: 'success',
                description: 'Brand Details Updated Successfully',
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





// exports.getAllUsers = base.getAll(User);
// exports.getUser = base.getOne(User);

// Don't update password on this 
// exports.updateUser = base.updateOne(User);
// exports.deleteUser = base.deleteOne(User);

module.exports = {
    brandlist,
    addbrand,
    deletebrand,
    BrandDetails,
    UpdateBrand
 
}