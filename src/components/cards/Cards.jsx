import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/globalContext'

function Cards() {

  const {totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  return (
    <>
    <Card>
    <ParentContainer>
      <DollarCont>
        <i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{color:"lightgreen"}}></i>
        </DollarCont>
        <Texter>
          <Title>
          Total Income
          </Title>
          <Amount>
          <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {totalIncome()}
          </Amount>
        </Texter>
    </ParentContainer>
    <ParentContainer>
        <DollarCont>
        <i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{color:"red"}}></i>
        </DollarCont>
        <Texter>
          <Title>
          Total Expense
          </Title>
          <Amount>
          <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {totalExpenses()}
          </Amount>
        </Texter>
    </ParentContainer>
    <ParentContainer>
        <DollarCont>
        <i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{color:"lightblue"}}></i>
        </DollarCont>
        <Texter>
          <Title>
          Total Balance
          </Title>
          <Amount>
          <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {totalBalance()}
          </Amount>
        </Texter>
    </ParentContainer>
    </Card>
    </>
  )
}

export const Card = styled.div`
width:100%;
display: flex;
gap: 10px;
@media screen and (max-width:768px){
  flex-direction:column
}

`
export const ParentContainer = styled.div`
width: 100%;
height: 5.5rem !important;
margin:10px;
display:flex;
flex-direction: row;
background-color:#1a25b ;
border-radius: 10px;
`

export const DollarCont = styled.div`
width: 50%;
display:flex;
justify-content: center;
align-items:center;
font-size: 2rem;
color: lightgrey;
background-color:#111b30;
border-radius: 10px;
`
export const Texter = styled.div`
width:100%;
font-size: 1rem;
color: lightgrey;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 10px;
background-color:rgba(2, 0, 24, 0.13);
`
export const Title = styled.div`
font-size:0.7rem;
color: white;
`

export const Amount = styled.div`
font-size:1.5rem;
font-weight:900;
`
export default Cards