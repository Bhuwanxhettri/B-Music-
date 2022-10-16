import  express  from "express";
import {getAllBlogs,addBlog} from "../controllers/blog-controller";
import Blog from "../model/Blog";

const blogRouter = express.Router();

blogRouter.post("/add/blog",addBlog)
blogRouter.get("/instaMusic",getAllBlogs);



// blogRouter.post("/blog/add",upload.single('image'),async(req,res)=>{
    
//     const {title,description,genere} = req.body;

//     try{
//        const result = await cloudinary.uploader.upload(req.file.path);

//     }catch(err){
//          console.log(err);
//     }

//     const blog = new Blog({
//          title,
//          description,
//          genere,
//          image:result.secure_url,
//          cloudinary_id:result.public_id,
//         //  user
//     })

//     try{
//         await blog.save();
//      }catch(err){
//         return console.log(err);
//      }
   
// });







export default blogRouter;