import mongoose from "mongoose";


export const Connection= async (username,password)=>{
   const URL=`mongodb+srv://${username}:${password}@ecommerce-web.fzkj8kw.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useunifiedTopology:true,useNewUrlParser:true})
        console.log('Database connected Successfully');
    } catch (error){
        console.log(`Error while connecting with the database`,error.message);
    }
}

export default Connection;