import {ModalBack, Content,Close ,Text, Form, Label,Input, Button2,ButtomWrapper} from '../Styles/globalStyles';
import React, { useContext, useState } from 'react'
import {Context, server} from '../main'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import ReactLoading from "react-loading";
import { useGlobalContext } from '../Context/globalContext';

function Login(props) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');

  const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useGlobalContext();

  const [error, setError] = useState({
    email: "",
    password: "",
    default: ""
  });

  function handleError(error){
    if(error === "Invalid email or password"){
      setError({
        email: error,
        password:error,
        default: ""
      })
    }else if(error === "Invalid email or password"){
      setError({
        email:error,
        password:error,
        default: ""
      })
    }else{
        setError({
            email:"",
            password:"",
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
    });
    try {
      const {data} = await axios.post(`${server}/users/login`,{
        email,
        password
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
  
      toast.success(data.message) 
      setLoading(false)
      setIsAuthenticated(true);
      
    } catch (error) {
      handleError(error.response.data.message)
      setLoading(false)
      setIsAuthenticated(false);
    }
  }
  return (
    <>
    <ModalBack onClick={props.onRequestClose} >
        <Content height="450px" onClick={e => e.stopPropagation()}>
            <Close onClick={props.onRequestClose}>x</Close>
            <Text left="20px" top='60px' >
                <span style={{fontSize: "1.75rem"}}>Log In </span><br/>Please login to account your Expenses<br/><br/><hr/></Text>
            <Form height="220px" onSubmit={submitHandler}>
                <Label htmlFor="email" top="28px">Email : </Label>
                <Input type='email' 
                    placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                    name="email"
                    top="20px"
                />
                <Text left="115px" top="65px" size="0.85rem" weight="300" color="red">{error.email}</Text>
                <Label htmlFor="password" top="108px">Password : </Label>
                <Input 
                    type='password' 
                    placeholder='password' 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                    name="password"
                    top ="100px"
                />
                <Text left="115px" top="148px" size="0.85rem" weight="300" color="red">{error.password}</Text>
            <ButtomWrapper height="20%" >
            {loading ? (
            <ReactLoading
              type="bubbles"
              color="rgba(100, 110, 120, 1)"
              height={100}
              width={100}
              />
          ):(<Button2 type="submit">Log In</Button2>)}
            </ButtomWrapper>
            <Text left="45px" top="220px"  size="0.85rem" weight="300" color="red">{error.default}</Text>
            </Form> 
            <Text left="55px" top='400px'  >Don't Have a Account, <span style={{color : "grey",cursor:"pointer"}} onClick={(e)=>{
                        props.onRequestClose();
                        props.openSign();
            }}>Sign Up</span></Text>
        </Content>
    </ModalBack>
    </>
  )
}

export default Login