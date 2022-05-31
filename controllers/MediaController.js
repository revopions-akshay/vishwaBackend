let Media = require("../models/mediaModel");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const sharp = require("sharp");
const { resourceUsage } = require("process");
const { response } = require("express");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/JPG"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const addmedia = async (req, resp) => {
  let upload = multer({ storage: storage, fileFilter: fileFilter }).array("files", 10);
// console.log(req.files)
  upload(req, resp, function (err) {
    if (req.fileValidationError) {
      return resp.send(req.fileValidationError);
    } else if (!req.files) {
      return resp.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return resp.send(err);
    } else if (err) {
      return resp.send(err);
    }


    // resp.send("uploaded");

    // const media = req.file.filename;
    const files = req.files;
    let index, len;
   let myresult = []
 

    for (index = 0, len = files.length; index < len; ++index) {
      // console.log(files[index])
      const media = files[index].filename;

      sharp(files[index].path)
        .resize(200, 200)
        .toFile("uploads/images/thumbnails/" + media, (err, resizeImage) => {
          if (err) {
            console.log(err);
          } else {
            console.log(resizeImage);
          }
        });

      const ImageURL = "http://localhost:5000/uploads/images/";
      const ThumbURL = "http://localhost:5000/uploads/images/thumbnails/";

      const actual = ImageURL + media;
      const thumbnail = ThumbURL + media;

      const newMedia = {
        media,
        actual,
        thumbnail,
      };

      const newmedia = new Media(newMedia);
      newmedia.save();
    }




    //  let  medi = newmedia.save();
    //   medi.then(function(result) {
    //     console.log(myresult);
        //  myresult = result;
        // return myresult; 
    //   })
    //   console.log(myresult);
    // }

    // console.log(response)

  //   if(result !== null && result !== ''){
  //     resp.send(result);
  // }else{
  //     resp.send({
  //     result: "No record found."
  //     })
  // }

 
   

  });
  resp.send("Media Saved Successfully");
};




const deleteMedia = async (req, resp) =>{
    
  let result = await Media.deleteOne({_id:req.params.id});
  if(result){
    const r = {
    status: 200,
    message: 'success',
    description: 'Media Delete Successfully',
    data: result
  }
  resp.send(r)
}
  else{
    const r = {
      status: 200,
      message: 'failed',
      description: 'Something Wrong, Please Try Again',
      data: result
    }
    resp.send(r)
  }
   
};


const medialist = async (req, resp) =>{
  
  let medialist = await Media.find();
  // console.log(brandlist);
  if(medialist.length>0){
    const r = {
      status: 200,
      message: 'success',
      description: 'Media Fetch Successfully',
      data: medialist
    }
      resp.send(r)
  }else{
    const r = {
      status: 200,
      message: 'failed',
      description: 'No Media found',
      data: medialist
    }
      resp.send(r)
      
  }
};


const mediaDetails = async (req, resp) =>{
    
  let result = await Media.findOne({_id:req.params.id});
  if(result){
    const r = {
      status: 200,
      message: 'success',
      description: 'Media Details Fetch Successfully',
      data: result
    }
      resp.send(r);
  }else{
    const r = {
      status: 200,
      message: 'failed',
      description: 'No Details Found',
      data: []
    }
      resp.send(r);
     
  }
  
};


// const updateMedia = async (req, resp) =>{
  
//   let result = await Media.updateOne(
//       {_id:req.params.id},
//       {
//           $set : req.body
//       });

//       resp.send(result);

  
// };


module.exports = {
  addmedia,
  medialist,
  deleteMedia,
  mediaDetails
};
