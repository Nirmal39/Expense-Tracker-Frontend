import {ModalBack, Content,Close ,Text, Form, Label,Input, Button2,ButtomWrapper} from '../Styles/globalStyles';
import React, { useContext, useState } from 'react'
import {Context, server} from '../main'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import ReactLoading from "react-loading";
import { useGlobalContext } from '../Context/globalContext';


function SignUp(props) {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('');
  const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useGlobalContext();


  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleError(error){
    if(error === "Password Doesn't Match"){
      setError({
        email: "",
        password: "",
        confirmPassword: error

      })
    }else if(error === "User already exist"){
      setError({
        email:error,
        password:"",
        confirmPassword:"",
        default: ""
      })
    }else{
        setError({
            email:error,
            password:"",
            confirmPassword:"",
            default: "Invalid Error"
          })
      }
    }


  const submitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true)
    setError({
      email: "",
      passowrd: "",
      confirmPassword: "",
      default: ""
    });
    try {
      const {data} = await axios.post(`${server}/users/new`,{
        name,
        email,
        password,
        confirmPassword
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      toast.success(data.message) 
      setLoading(false);
      setIsAuthenticated(true);
      
    } catch (error) {
      handleError(error.response.data.message);
      setLoading(false)
      setIsAuthenticated(false);
    }

  }

  return (
    <>
    <ModalBack onClick={props.onRequestClose}>
        <Content height="560px" onClick={e => e.stopPropagation()}>
            <Close onClick={props.onRequestClose}>x</Close>
            <Text left="20px" top='60px' >
                <span style={{fontSize: "1.75rem"}}>Sign Up </span><br/> Please fill this to create an account<br/><br/><hr/></Text>
            <Form height="350px" onSubmit={submitHandler}>
                <Label htmlFor="email" top="22px">Name: </Label>
                <Input 
                    type='text' 
                    placeholder='Name' 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    required
                    name="name"
                    top="14px"
                />
                <Label htmlFor="email" top="92px">Email : </Label>
                <Input 
                    type='email' 
                    placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                    name="email"
                    top="84px"
                />
                <Text left="115px" top="126px" size="0.85rem" weight="300" color="red">{error.email}</Text>
                <Label htmlFor="password" top="162px">Password : </Label>
                <Input 
                    type='password' 
                    placeholder='password' 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                    name="password"
                    top ="154px"
                />
                <Text left="115px" top="196px" size="0.85rem" weight="300" color="red">{error.password}</Text>
                <Label htmlFor="confirmPassword" top="228px">Confirm <br/>Password : </Label>
                <Input 
                    type='password' 
                    placeholder='Confirm password' 
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                    name="confirmPassword"
                    top ="224px"
                />
                <Text left="115px" top="266px" size="0.85rem" weight="300" color="red">{error.confirmPassword}</Text>
                <ButtomWrapper height="15%">
            {loading ? (
            <ReactLoading
              type="bubbles"
              color="rgba(100, 110, 120, 1)"
              height={100}
              width={100}
              />
          ):(<Button2 type="submit" bottom="60px">Sign Up</Button2>)}
            </ButtomWrapper>
            <Text left="45px" top="350px"  size="0.85rem" weight="300" color="red">{error.default}</Text>

            </Form> 
            <Text left="55px" top='515px'  >Already Have an account, <span style={{color : "grey",cursor:"pointer"}} onClick={()=>{
                        props.onRequestClose();
                        props.openLog();
            }}>Log In</span></Text>
        </Content>
    </ModalBack>
    </>
  )
}

export default SignUp;