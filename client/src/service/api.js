import axios from 'axios';


const URL= 'http://localhost:8000';

export const authenticateSignup= async (data)=>{
      try {
        //  data is a body(payload) in the post request
      return await axios.post(`${URL}/signup` ,data);
      } catch(error) {
      console.log('Error while calling signup api',error);
      }
}
export const authenticateLogin= async (data)=>{
      try {   console.log("hellllllllllllll")
        //  data is a body(payload) in the post request
      return await axios.post(`${URL}/login` ,data);
      
    } catch(error) {
      console.log('Error while calling login api',error);
       return error.response;
      }
}

