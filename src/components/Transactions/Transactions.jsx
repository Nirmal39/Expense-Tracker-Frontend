import React, { useEffect, useState } from 'react'
import {  MainLayout } from '../../Styles/Layout'
import {BsFillPencilFill,BsFillTrashFill} from 'react-icons/bs'
import styled from 'styled-components';
import './transactions.css'
import { useGlobalContext } from '../../Context/globalContext';
import { dateFormat } from '../../utils/dateFormat'
import dayjs from "dayjs";
import Moment from 'moment';

const initialState = {
  amount: "", 
  date : '', 
  category :"", 
  type: ""
}

function Transactions() {

  const [currentPage, setCurrentPage] = useState(1)
  const [show,setShow] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const [catAccording, setCatAccording] = useState([])

  const {addIncome,addExpense,  deleteExpense, deleteIncome,category,transactionHistory} = useGlobalContext()

  const datas = transactionHistory();



  const tranPerPage = 8;
  const lastIndex = currentPage * tranPerPage;``
  const firstIndex = lastIndex-tranPerPage;

  const records = datas.slice(firstIndex,lastIndex)
  const npage = Math.ceil(datas.length / tranPerPage)

  const Category = category

  const numbers = [...Array(npage + 1).keys()].slice(1)

  useEffect(()=>{
    getCat();
  },[formData.type])


  const getCat = () => {
    var newCat;
    if(formData.type === "expense"){
      newCat = Category.filter((cat)=> cat.type === "expense")
    }else{
      newCat = Category.filter((cat)=> cat.type !== "expense")
    }
    setCatAccording(newCat)
  }

  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage((prev) => prev-1)
    }
  }

  const nextPage = () =>{
    if(currentPage !== npage){
      setCurrentPage((prev) => prev + 1)
    }
  }

  const changePage = (id) =>{
    setCurrentPage(id)
  }

  const submitHandler =(e) => {
    e.preventDefault()
    formData.amount = Number(formData.amount)
    if(formData.type==="income"){
      addIncome(formData)
    }else{
      addExpense(formData)
      
    }
    setFormData(initialState);
  }

  return (
    <MainLayout>
        <CenterLayout>
        <Upper>
            <p>Transactions <br /><span><i className='bx bx-home-alt icon' ></i>{show ? "Add " : ""} Transactions</span></p>
            <button onClick={()=>{
              setShow((prev)=> !prev)
            }}> {show ? "Back to" : "+ New"} Transactions</button>
          </Upper>
        {!show ? (
          <>
            <div className = "table-wrapper">
            <table className='table'>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Date</th>
                  <th >Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((data)=>{
                  const {_id, amount, date, category, type} = data;
                  const cat = Category.filter((cat)=>cat.title == category)
                  return (
                    <tr key={_id}>
                    <td>{cat[0]?.icon} {category}</td>
                    <td>{dayjs(date).format("MMM D,YYYY")}</td>
                    <td className={`label ${type==="expense" ? "label-expense" : "label-income"}`}>{type === "expense" ? "-" : "+"} {amount}</td>
                    <td>
                      <span className='actions'>
                        <BsFillTrashFill onClick={()=>{type==="expense"? deleteExpense(_id): deleteIncome(_id) }}/>
                      </span>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
            <Nav>
              <Pagination>
                  <li className='page-item' onClick={prevPage}>prev</li>
                {numbers.map((n,i)=>(
                  <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i} onClick={()=>changePage(n)}>
                    {n}
                  </li>
                ))}
                  <li className='page-item' onClick={nextPage}>next</li>
                </Pagination>
              </Nav>
          </div>
          </>
          ) : (
            <>
          <Form onSubmit={submitHandler}>
              <Div>
                <Label>Amount</Label>
                <Input type="number"
                name = "amount"
                required
                value={formData.amount}
                onChange={(e)=>setFormData({...formData, amount: e.target.value})}  />
              </Div>
              <Div>
                <Label>Type</Label>
                <Select name="type" required value={formData.type}
                onChange={(e)=>setFormData({...formData, type: e.target.value})} >
                  <option value="" disabled>Select</option>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </Select>
              </Div>
              <Div>
                <Label>Date</Label>
                <Input type="date" 
                name="date"
                required
                value={formData.date}
                onChange={(e)=>setFormData({...formData, date: e.target.value})} />
              </Div>
              <Div>
                <Label>Category</Label>
                <Select name="type" required value={formData.category}
                onChange={(e)=>setFormData({...formData, category: e.target.value})} >
                  <option value="" disabled>Select</option>
                  {catAccording?.map((cat)=>{
                    return <option value={cat?.title}>{cat?.title}</option>
                  })}
                </Select>
              </Div>
              <Button>Submit</Button>
            </Form>
            </>
            
          )}
        </CenterLayout>
  </MainLayout>
  )
}


export const CenterLayout = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
flex-direction: column;
height: 100%;
width: 100%;
padding: 10px;
`

export const Upper = styled.div`
color:white;
display: flex;
width: 80%;
justify-content: space-around;
margin-bottom: 15px;
p{
  font-weight: 800;
  font-size: 1.6rem;
  color: lightgrey;
  span{
    font-size: 0.85rem;
    color: grey;
  }
 }
 button{
  height: 30px;
  width: 22%;
  background-color: #00A86B;
  border-radius: 10px;
  font-weight: 800;
 }
`
const Nav = styled.nav`
position: absolute;
bottom : 0;
width 100%;
`

const Pagination = styled.div`
padding: 5px;
margin: 0;
background: rgb(21, 25, 40);
border-radius:0 0 10px 10px;
display: flex;
justify-content: center;

  li{
    list-style: none;
    padding: 5px 20px;
    cursor: pointer;
    color: grey;
    &:hover{
      background : grey;
      color: green;
    }
  }
`


const Form = styled.form`
display: flex;
flex-direction: column;
height: 43%;
width: 44%;
gap: 15px;
border-radius: 10px;
background-color: rgba(2, 0, 24, 0.13);
padding: 15px;
`
const Input = styled.input`
background: #101522;
width : 70%;
color: lightgrey;
outline: none;
border : none;
border-radius: 10px;
padding: 10px;
`

const Div = styled.div`
display: flex;
justify-content:  space-between;
`
const Label = styled.label`
color: lightgrey;
font-size : 20px;
font-weight: 700;
`

const Select = styled.select`
background: #101522;
width : 70%;
color: lightgrey;
border-radius: 10px;
padding: 10px;
outline: none;
border : none;

option{
  background: #101522;
  padding: 10px;
  color: grey;
}
`

const Button = styled.button`
background: #101522;
color: lightgrey;
font-weight: 600;
letter-spacing: 2px;
font-size: 15px;
border-radius: 10px;
outline: none;
border: none;
padding: 10px;
cursor: pointer;
&:hover{
  color: #101522;
  background :lightgrey;
}
`


export default Transactions