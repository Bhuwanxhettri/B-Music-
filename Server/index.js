import express  from "express";
import cors from "cors"
import bodyParser from "body-parser";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import { databaseConnect } from "./db/db";
// import cloudinary from 'cloudinary'
// import multer from "multer";


const port = 5000;
const app = express();
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
app.use(cors());
app.use(bodyParser.json());


// database connection
databaseConnect();


// Router
 // user Router
app.use(router);

app.use(blogRouter);


   // Get the file name and extension with multer

//    const upload = multer({
//       storage:multer.diskStorage({
//          filename: (req, file, cb) => {
//             const fileExt = file.originalname.split(".").pop();
//             const filename = `${new Date().getTime()}.${fileExt}`;
//             cb(null, filename);
//           },
//       }),
//       fileFilter:(req,file,cb)=>{
//          if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
//             cb(null, true);
//           } else {
//             cb(
//               {
//                 message: "Unsupported File Format",
//               },
//               false
//             );
//           }
//       }
//  })


// app.post("/audio/upload",upload.single('audio'), async (req, res) => {
//    cloudinary.config({ 
//       cloud_name: 'dkkrabfyq', 
//       api_key: '437437346396341', 
//       api_secret: 'NxcokKMJrIIQmVHBU42Z6rX8rLE' 
//     });
//    try{
//       var result = await cloudinary.uploader.upload(req.file.path);
//       res.json({
//          message:result
//       })

//    }catch(err){
//         console.log(err);
//    }

//  });
 



