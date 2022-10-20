import jwt from 'jsonwebtoken';

export const isAuthenticatedUser = async(req,res,next)=>{
    const token = req.header('x-auth-token');
     
    if(!token){
     return  res.json({message:"Please login first"});
    }

    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid TOken" });
      }
      req.user = user;
    });
  
  next();
}