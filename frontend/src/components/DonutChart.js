import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import generateColor from '../helpers/generateColor';
import countProjectStatus from '../helpers/countProjectStatus';


const DonutChart = (props) => {
  const {projects} = props;
  const background = generateColor(3);
  const border = background.map(item=> item.replace('0.2', '1'));
  const data = {
    labels: ['Production', 'Development', 'Standby'],
    datasets: [
      {
        data: [countProjectStatus(projects, 'Production'), countProjectStatus(projects, 'Development'), countProjectStatus(projects, 'Standby')],
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className='header'>
        <h1 className='title'>Projects Status</h1>
      </div>
      <Doughnut data={data} />
    </>
);
}

export default DonutChart;