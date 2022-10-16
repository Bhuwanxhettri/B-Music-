import User from "../model/Users";
import bcrypt from 'bcryptjs';


// signUp function 😊
export const  signup  = async(req,res,next)=>{
    const {name,email,password}  = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
       return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"user Already Exist ! Login Instead"});
    }

    // hash password
    const hashPassword=bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password:hashPassword,
        blogs:[]
    })

    try{
       await user.save()
    }catch(err){
       return console.log(err);
    }
    
    return res.status(200).json({user})

}

// Login function 😊
export const login = async(req,res,next)=>{
    const {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        console.log(err);
    }
    if(!existingUser){
        return res.json({message:"Cout not find User by this email"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.json({message:"Incorrect Password"});
    }
    return res.json({message:"Login Successfull"});
}







