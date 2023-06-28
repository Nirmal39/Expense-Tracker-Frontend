import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';



function Contact() {

  const form =  useRef()


  const submitHandler = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_hnacxav', 'template_f7f5czj', form.current, 'hfmg0ngJm5IVxFh1B')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    e.target.reset()
  }

  return (
    <CenterLayout>
      <Form ref={form} onSubmit={submitHandler}>
        <p style={{marginBottom: "20px"}}>React Out to Me</p>
        <input type="text" name='name' placeholder='name' required/>
        <input type="email"  name='email' placeholder='email' required/>
        <textarea cols="30" rows="5"  name='message' placeholder='Message' required></textarea>
        <button type='submit'>Send</button>
      </Form>
    </CenterLayout>
  )
}

const CenterLayout = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #101522;
color: lightgrey;
width: 100vw;
height: 100vh;
`

const Form = styled.form`
padding : 20px;
padding-bottom :25px;
border-radius: 10px;
width: 30%;
height: 50%;
display: flex;
background: #233554;
flex-direction :column;
gap: 15px;
p{
  font-size: 25px;
  color: grey;
  font-weight: 700;
}
input,textarea,button{
  padding: 10px;
  background: #101522;
  color: lightgrey;
  font-size: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
}
button{
  color: lightgrey;
  font-size: 20px;
  font-weight: 700;
  &:hover{
    background: lightgrey;
    color: #233554;
  }
}
`

export default Contact