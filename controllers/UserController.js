// const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../models/userModel');


// exports.deleteMe = async (req, res, next) => {
//     try {
//         await User.findByIdAndUpdate(req.user.id, {
//             active: false
//         });

//         res.status(204).json({
//             status: 'success',
//             data: null
//         });


//     } catch (error) {
//         next(error);
//     }
// };


const register = async (req, resp) =>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
};


const login = async (req,resp)=>{
    if(req.body.password && req.body.email){
        let user= await User.findOne(req.body).select("-password");
        if(user){
            // Jwt.sign({ user }, jwtKey, { expiresIn: "2h"},  (err, token) => {
            //     if(err){
            //         resp.send({ result: "something went wrong"})
            //     }
                resp.send(user)
            }else{
            resp>send({result: 'No User Found'})
        }
      
    }else{
        resp.send({result: 'No User Found'})
    }
    
};



// exports.getAllUsers = base.getAll(User);
// exports.getUser = base.getOne(User);

// Don't update password on this 
// exports.updateUser = base.updateOne(User);
// exports.deleteUser = base.deleteOne(User);

module.exports = {
    register,
    login
}