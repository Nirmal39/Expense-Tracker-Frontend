import {  MainLayout } from '../../Styles/Layout'
import React, { useEffect, useState } from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';


const initialState = {
  title: "", 
  icon : '', 
  type: ""
}

function Category() {


  const [currentPage, setCurrentPage] = useState(1)
  const [show,setShow] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const {addCategory,getCategory,deleteCategory,category} = useGlobalContext();

  
  useEffect(()=>{
    getCategory();
  },[])

  const catPerPage = 6;
  const lastIndex = currentPage * catPerPage;``
  const firstIndex = lastIndex-catPerPage;

  const records = category.slice(firstIndex,lastIndex)
  const npage = Math.ceil(category.length / catPerPage)

  const numbers = [...Array(npage + 1).keys()].slice(1)

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


  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(formData)
    addCategory(formData)
    setFormData(initialState)
  }
  return (
    <MainLayout>
      <CenterLayout>
      <Upper>
            <p>Categories <br /><span><i className='bx bx-home-alt icon' ></i>{show ? "Add " : ""} Category</span></p>
            <button onClick={()=>{
              setShow((prev)=> !prev)
            }}> {show ? "Back to" : "+ New"} Categories</button>
          </Upper>
          {!show ? (
            <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th >type</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  {records?.map((cat)=>(
                    <tr key={cat?._id}>
                      <td>{cat.icon} {cat.title}</td>
                      <td className={`label ${cat.type==="expense" ? "label-expense" : "label-income"}`} >{cat.type}</td>
                      <td style={{cursor:"pointer"}}><BsFillTrashFill onClick={()=>{deleteCategory(cat?._id)}}/></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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
              </TableWrapper>
          ):(
            <Form onSubmit={submitHandler}>
              <Div>
                <Label>Title</Label>
                <Input type="text" 
                name="title"
                required
                value={formData.title}
                onChange={(e)=>setFormData({...formData, title: e.target.value})}/>
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
                <Label>Icon</Label>
                <Input type="text" 
                name="icon"
                required
                value={formData.icon}
                onChange={(e)=>setFormData({...formData, icon: e.target.value})} />
              </Div>
              <Button>Submit</Button>
            </Form>
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
width: 72%;
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


const TableWrapper = styled.div`
position: relative;
height: 61%;
width: 50%;
background-color: rgba(2, 0, 24, 0.13);
border-radius: 15px;
`

const Table = styled.table`
width: 100%;
display: block;
overflow: hidden;
table-layout: fixed;
border-collapse: collapse;
border-radius: 10px;
white-space: nowrap;
margin: auto;
table-layout: auto;
overflow-x: auto;

 thead{
  background-color: #222b33;
  color: grey;
 }
 th,td{
  padding: 0.8rem;
  width: 50%;
  text-align: start;
  font-size: 1.2rem;
 }
 td{
  overflow: hidden;
  text-overflow: ellipsis;
 }
 tbody tr{
  color: lightgrey;
  font-size: 1.2rem;
 }
 tbody tr:hover{
  background-color: #eee;
  color: black;
 }
`


const Form = styled.form`
display: flex;
flex-direction: column;
height: 35%;
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

export default Category