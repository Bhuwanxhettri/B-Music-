import  express  from "express";
import {getAllBlogs,addBlog} from "../controllers/blog-controller";
import { isAuthenticatedUser } from "../middleware/auth";


const blogRouter = express.Router();

blogRouter.post("/add/blog",isAuthenticatedUser,addBlog);
blogRouter.get("/instaMusic",isAuthenticatedUser,getAllBlogs);



export default blogRouter;