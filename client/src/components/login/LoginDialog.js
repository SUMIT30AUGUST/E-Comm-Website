import { Dialog,Box,TextField,Button, Typography,styled } from "@mui/material";
import { useState,useContext,useEffect } from "react";

//values will come from Datacontext
import { DataContext } from "../../context/DataProvider";
import { authenticateSignup,authenticateLogin } from "../../service/api";

const Component = styled(Box)`
height:70vh ;
width:90vh;
/* width: 90vh; */
`

const Image=styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 100%;
    width: 28%;
    padding: 35px 35px;
    & > p,& > h5 {
        color:#FFFFFF;
         font-weight:600;
    }
`

const Wrapper= styled(Box)`
   display: flex;
   flex-direction:column;
   padding: 35px 45px;
   height:80%;
   flex:1;
   & > div, & > button ,& > p {
    margin-top:20px;
   }
`

const LoginButton=styled(Button)`
text-transform:none;
background:#Fb641B ;
color: #fff;
height: 48px;
border-radius :3px;
`

const RequestOTP=styled(Button)`
text-transform:none;
background:#fff ;
color: #2874f0;
height: 48px;
cursor:pointer;
border-radius :3px;
box-shadow: 0 2px 4px 0 rgb(0  0 0/ 20%);
`

const Text = styled(Typography)`
  font-size:12px;
  color:#878787;
`

const CreateAccount = styled(Typography)`
      font-size: 14px;
      text-align:center;
      color:#2874f0;
      font-weight:600;
      cursor:pointer;
`

const Error =styled(Typography)`
font-size:10px;
color : red;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`


const accountInitialValue={
   login:{
      view: 'login',
      heading:'Login',
      subHeading:'Get access to your Orders,Wishlist and Recommnedation'
   },
   signup:{
      view : 'signup',
      heading:'Looks like you are New here !',
      subHeading: 'sign up with your mobile number to get started'
   }
}

  const signupInitialValues = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
  }
 
  const loginInitialValues = {
    username:"",
    password:""
   
  }

   const LoginDialog=({open,setOpen})=>{
  
   const [account,toggleAccount]= useState(accountInitialValue.login);
   const [signup,setSignup]= useState(signupInitialValues);
   const [login,setLogin]= useState(loginInitialValues)
   const {setAccount}=useContext(DataContext);
   const [error,showError]= useState(false);

   useEffect(() => {
      showError(false);
  }, [login])
    
   const handleClose=()=>{
        setOpen(false);
      toggleAccount(accountInitialValue.login)
       showError(false)
      } 

   const toggleSignup=()=>{
      toggleAccount(accountInitialValue.signup)
   }

   const onInputChange =(e)=>{
                  //   object destructuring
       setSignup({...signup,[e.target.name]:e.target.value})
      //  console.log(signup);
      }


      //
   const signupUser= async ()=>{
      //   signup becomes the payload/body here to post request
    let response= await  authenticateSignup(signup)
    if (!response ) return;
    handleClose();
    setAccount(signup.firstname);
   }


   const onValueChange=(e)=>{
      setLogin({...login, [e.target.name]: e.target.value});
   }

   const loginUser= async()=>{
      let response= await  authenticateLogin(login);
     console.log(response);
      if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(response.data.data.firstname);
        }
   }

    return(
       <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
          <Component>
            <Box style={{display:"flex",height:'100%'}}>
               <Image>
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
               </Image>
               {
               account.view=== 'login' ?
                    <Wrapper>
                       <TextField variant="standard" label="Enter Username" onChange={(e) => onValueChange(e)} name="username"></TextField>
                       
                       {/*Below error only show when user enter invalid username and password  */}
                       {error && <Error>Please enter valid username or password</Error>}
                       <TextField variant="standard" label="Enter Password" onChange={(e) => onValueChange(e)} name="password"></TextField>
                       <Text> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                       <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                       <Typography style={{textAlign:'center'}}>OR</Typography>
                       <RequestOTP> Request OTP </RequestOTP>
                       <CreateAccount onClick={()=> toggleSignup()}>New To Flipkart? Create an account</CreateAccount>
                     </Wrapper>
               :        
                    /*  Signup dialog box*/
                     <Wrapper>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Your First Name"></TextField>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Your Last Name"></TextField>
                          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter UserName"></TextField>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter email"></TextField>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password"></TextField>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone No."></TextField>
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        <RequestOTP> Request OTP </RequestOTP>
                        <CreateAccount>New To Flipkart? Create an account</CreateAccount>
                      </Wrapper>
               }    
            </Box>
          </Component>
       </Dialog>
        )
}

export default LoginDialog;