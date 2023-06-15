import React from 'react'
// import styled from 'styled-components'
import {  MainLayout } from '../../Styles/Layout'
import {InnerLayout} from '../../Styles/globalStyles'
import Cards from '../cards/Cards'
import Charts from '../Charts/Charts'
import { useEffect } from 'react'
import { useGlobalContext } from '../../Context/globalContext'


function Dashboard() {

  return (
    <MainLayout>
       <InnerLayout>
         <h1 style={{color: "lightgrey", marginBottom: "10px"}}>Dashboard</h1>
         <Cards/>
         <Charts/>
       </InnerLayout>
    </MainLayout>

  )
}



// export const GRows = styled.div`
// display:grid;
// grid-template-columns : repeat(${props => props.cols},1fr);
// border: 1px solid red;
// `


// export const GColumns = styled.div`
// padding: 10px 14px;
// border: 1px solid grey;
// `

export default Dashboard