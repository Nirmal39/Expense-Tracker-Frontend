import React from 'react'
import styled from 'styled-components'
import Doughnut from './DoughnutChart.jsx'
import SpreadChart from './SpreadChart.jsx'

function Charts() {
  return (
    <Chart>
      <ChartBox>
        <Doughnut/>
      </ChartBox>
    
      <ChartBox>
        <SpreadChart/>
      </ChartBox>
    </Chart>
  )
}

const Chart = styled.div`
position: relative;
width: 100%;
padding: 20px;
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 30px;
min-height: 400px;
@media (max-width : 991px){
  grid-template-columns: 1fr;
  height: auto;
  width: 100%;
}
`

const ChartBox = styled.div`
position : relative;
background: rgba(2, 0, 24, 0.13);
padding: 20px;
width : 100%;
box-sahdow: 0 7px 25px rgba(0,0,0,0.08);
border-radius: 20px;
`


export default Charts