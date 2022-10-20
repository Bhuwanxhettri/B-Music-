import User from "../model/Users";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  dotenv from 'dotenv';

dotenv.config();


// signUp function 😊
export const  signup  = async(req,res,next)=>{
    const {name,email,password}  = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email}).select("-password");
    }catch(err){
       return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"user Already Exist ! Login Instead"});
    }

    // hash password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password,salt);

    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    })

    try{
       await user.save()
    }catch(err){
       return console.log(err);
    }

    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
    });

    return res.status(200).json({user,token});

}

// Login function 😊
export const login = async(req,res,next)=>{
    const {email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email }).select("+password");
        //  comparing the password
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Inavlid Email / Password" });
        }
   } catch (err) {
     return new Error(err);
   }
   if (!existingUser) {
     return res.status(400).json({ message: "User not found. Signup Please" });
   }
   
    existingUser = await User.findOne({ email: email }).select("-password -blogs");
    const token = jwt.sign({ id:existingUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
    });

    return res.status(200).json({existingUser,token,message:"Login Successfull"});
}










