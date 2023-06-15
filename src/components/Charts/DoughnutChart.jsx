import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';

ChartJS.register(ArcElement, Tooltip, Legend);




function DoughnutChart() {

  const {expenses,getAllData,getExpenses} = useGlobalContext();
  const [datas, setDatas] = useState({})
  const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  useEffect(()=>{
    getExpenses()
    const catData = expenses.reduce((map,val)=>{map[val.category] = (map[val.category] || 0)+ val.amount; return map}, {} );
    setDatas(catData)
  },[])
  
  
  const data = {
    labels: Object.keys(datas),
    datasets: [{
      label: 'Expenses',
      data: Object.values(datas),
      backgroundColor: [...colorArray],
      hoverOffset: 4
    }]
  };


  return (
    <>
      <Heading>Expense By Category</Heading>
      <Doughnut data={data}/>
      </>
  )
}

export const Heading = styled.div`
color: lightgrey;
font-size: 1.25rem;
font-weight: 500;
margin-bottom: 15px;
`



export default DoughnutChart