import mongoose from "mongoose";
import Blog from "../model/Blog";
import ApiFeatures from "../utils/apiFeature";

export const addBlog = async(req,res)=>{
  
   const {title,description,genere} = req.body;
   
   const blog = new Blog({
        title,
        description,
        genere,
      //   user
   })

   try{
       await blog.save();
    }catch(err){
       return console.log(err);
    }
  
}

export const getAllBlogs = async(req,res)=>{
     let blogs;
     let resultPerPage =3;
     const blogCount = await Blog.countDocuments();
     const apiFeature = new ApiFeatures(Blog.find(),req.query).pagination(resultPerPage)
     console.log(apiFeature);
     try{
         blogs = await apiFeature.query;
     }catch(err){
        return console.log(err);
     }
     if(!blogs){
        return res.status(404).json({message:"No blogs found"});
     }
     return res.status(200).json({
                 blogs:blogs,
                 blogCount:blogCount
     });
}








