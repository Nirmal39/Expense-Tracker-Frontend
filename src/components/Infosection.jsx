import React from 'react'
import { InfoSec ,InfoCol ,InfoRow ,TextWrapper ,TopLine ,Heading , SubTitle ,Image ,ImgWrapper , Img} from '../Styles/Infosection_elements'
import { Button, Container } from '../Styles/globalStyles'
// import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.svg'
import img2 from '../assets/img2.svg'
import Login from './Login'
import SignUp from './SignUp'

function Infosection(props) {
  return (
    <>
    <InfoSec style={props.isOpenLogin || props.modalIsOpenSign ? {background: "rgba(58, 63, 69, 0.71)"}: {background: "#101522" }}>
        <Container>
            <InfoRow>
                <InfoCol style={props.isOpenLogin || props.modalIsOpenSign ? {opacity : "0.7"}: {opacity : "1"}}>
                    <TextWrapper>
                        <TopLine>Expense Tracker</TopLine>
                        <Heading >The Expense Tracker That Works for you</Heading>
                        <SubTitle >You can Track all Your Transactions here....</SubTitle>
                        <Button big fontBig primary onClick={props.openModalLogin}>Get Started 
                        <Image src={arrow} alt="--->"></Image>
                        </Button>
                    </TextWrapper>
                </InfoCol>
                <ImgWrapper style={props.isOpenLogin || props.modalIsOpenSign ? {opacity : "0.7"}: {opacity : "1"}}>
                    <Img src={img2} alt="Image"></Img>
                </ImgWrapper>
                {props.isOpenLogin ? <Login 
                    onRequestClose={props.closeModalLogin}
                    openSign = {props.openModalSignup}
                    />: ''}
                {props.modalIsOpenSign ? <SignUp
                    onRequestClose={props.closeModalSignup}
                    openLog = {props.openModalLogin}
                />: ""}
            </InfoRow>
        </Container>
    </InfoSec>
    </>
  )
}

export default Infosection