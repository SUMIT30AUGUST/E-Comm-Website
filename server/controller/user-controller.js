import { response } from "express"
import User from "../model/user-schema.js"
// import user from "../model/user-schema.js"


export const userSignup= async (request,response)=>{
        try{
          const exist =  await User.findOne({username:request.body.username})
            if(exist){
                return response.status(401).json({message:"username already existed"})
            }
            const user=request.body
           const newUser = new User(user)
           // console.log(request.body)
            await newUser.save();

            response.status(200).json({message:user})
        }
        catch(error) {
            console.log("error is",error)
            response.status(500).json({message:error.message})
        }


}

export const userLogin= async (request,response)=>{
    try{
           const username =request.body.username;
           const password = request.body.password;

           let user = await User.findOne({username: username, password:password})
        //    console.log(user);
              
        if(user){   
           return response.status(200).json({data:user})
        }
        else {

          return  response.status(401).json('Invalid login')
        }
        }
    catch(error){
        // console.log("its an errorrrrrrrrrrrrrrrrr")
    response.status(500).json('Error',error.message)
    }
}