import React from 'react';
import { Bar } from 'react-chartjs-2';
import getStacksNames from '../helpers/getStacksNames';
import getProjectsPerStack from '../helpers/getProjectsPerStack';
import generateColor from '../helpers/generateColor';


const HorizontalBarChart = (props) => {
  const {stacks, projects} = props;
  const background = generateColor(stacks.length);
  const border = background.map(item=> item.replace('0.2', '1'));
  const data = {
    labels: getStacksNames(stacks),
    datasets: [
      {
        data: getProjectsPerStack(stacks, projects),
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Stacks Used",
      },
      legend:{
        display: false,
      }
    },
  };
 return (
   <>
     <div className='header'>
       <h1 className='title'>Stacks</h1>
     </div>
     <Bar data={data} options={options} />
   </>
);
}

export default HorizontalBarChart;