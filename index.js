const express = require('express');
const cors = require('cors');
var serveIndex = require('serve-index');


require('./db/config');
// const User = require("./db/User"); 
// const brand = require("./db/Brand");
const userRoutes = require('./routes/userRoutes');
const brandRoutes = require('./routes/brandRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const mediaRoutes = require('./routes/mediaRoutes')
const productRoutes = require('./routes/productRoutes');


// const Jwt = require('jsonwebtoken');
// const jwtKey = 'e-comm';  

const app = express();
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname + "/"))
app.use('/uploads', serveIndex(__dirname + '/uploads'));



app.use(userRoutes, brandRoutes, categoryRoutes, mediaRoutes, productRoutes)

// const medRouter = require('./routes/mediaRoutes');
// app.use('/mediaadd', medRouter);

// app.post("/register", async (req,resp)=>{
//     let user = new User(req.body);
//     let result = await user.save();
//     resp.send(result);
// })

// app.post("/login", async (req,resp)=>{
//     if(req.body.password && req.body.email){
//         let user= await User.findOne(req.body).select("-password");
//         if(user){
//             resp.send(user)
//         }else{
//             resp>send({result: 'No User Found'})
//         }
      
//     }else{
//         resp.send({result: 'No User Found'})
//     }
    
// })


// app.post("/brand", async (req,resp)=>{
//     let brand = new Brand(req.body);
//     let result = await brand.find(req.body);
   
//     resp.send(result);
// })



  

  
//   app.post('/addmedia', upload.single('file'), function (req, res) {
//     res.json({})
//   })
  



app.listen(5000);