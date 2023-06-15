import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {MainLayout} from '../Styles/Layout.jsx';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import Category from '../components/category/Category.jsx';
import Transactions from '../components/Transactions/Transactions.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import { useGlobalContext } from '../Context/globalContext.jsx';
import { Navigate } from 'react-router-dom';
import Loader from '../utils/Loader.jsx';

function Main() {

  const [active, setActive] = useState(1);

  const {isAuthenticated,getAllData,loading} =useGlobalContext()

  useEffect(()=>{
    getAllData();
  },[])

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Category />
      case 3:
        return <Transactions />
      default: 
        return <Dashboard />
    }
  }

  if(!isAuthenticated) return <Navigate to={'/login'}/>;

  return loading ? (<Loader/>) : (<AppStyled>
          <MainLayout>
          <Sidebar active={active} setActive={setActive} />
          {displayData()}
          </MainLayout>
          </AppStyled>)
  
}

const AppStyled = styled.div`
height: 100vh;
position: relative;
main{
  flex: 1;
  background: #101522;
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;



export default Main