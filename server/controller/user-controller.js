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