// src/components/DataChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataChart = ({ chartData }) => {
  return (
    <div>
      <h2>Data Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default DataChart;
