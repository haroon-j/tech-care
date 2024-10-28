// src/components/BloodPressureChart.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import 'chartjs-plugin-annotation';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const BloodPressureChart = ({ diagnosis_history }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (diagnosis_history && diagnosis_history.length > 0) {
      const recentHistory = diagnosis_history.slice(-6);

      // Create a new array with date objects for sorting
      recentHistory.sort((a, b) => {
        const dateA = new Date(`${a.year}-${String(a.month).padStart(2, '0')}-01`);
        const dateB = new Date(`${b.year}-${String(b.month).padStart(2, '0')}-01`);
        return dateA - dateB;
      });

      const labels = recentHistory.map(entry => `${entry.month} ${entry.year}`);
      const systolicData = recentHistory.map(entry => entry.blood_pressure.systolic.value);
      const diastolicData = recentHistory.map(entry => entry.blood_pressure.diastolic.value);

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Systolic Blood Pressure (mmHg)',
            data: systolicData,
            borderColor: '#E66FD2',
            backgroundColor: 'rgba(230, 111, 210, 0.2)',
            fill: true,
            borderCapStyle: 'round',
          },
          {
            label: 'Diastolic Blood Pressure (mmHg)',
            data: diastolicData,
            borderColor: '#8C6FE6',
            backgroundColor: 'rgba(140, 111, 230, 0.2)',
            fill: true,
            borderCapStyle: 'round',
          },
        ],
      };

      setChartData(data);
    }
  }, [diagnosis_history]);



  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Blood Pressure Readings',
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#F4F0FE] rounded-[12px]">
      <div className="w-full md:w-2/3 p-4">
        <div className="flex justify-between items-center pb-6 pt-6 px-4">
          <h1 className="font-bold font-manrope text-[24px] text-[#072635] leading-[19px]">Diagnosis History</h1>
        </div>
        {chartData && <Line data={chartData} options={options}  />}
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="p-4 flex flex-col items-start border-b border-b-[#cbc8d4] pb-5 mb-3">
          <div className="text-base font-manrope font-semibold text-[16px] text-[#072635] leading-[19px] mb-4">
            <span className="bg-[#E66FD2] w-[14px] h-[14px] rounded-full inline-block mr-2"></span>Systolic
          </div>
          <h2 className="text-xl font-bold font-manrope text-[30px] text-[#072635] leading-[19px] mb-5">160</h2>
          <div className="text-base font-manrope text-[14px] text-[#072635] leading-[19px]">Higher Than Average</div>
        </div>

        <div className="p-4 flex flex-col items-start">
          <div className="text-base font-manrope font-semibold text-[16px] text-[#072635] leading-[19px] mb-4">
            <span className="bg-[#8C6FE6] w-[14px] h-[14px] rounded-full inline-block mr-2"></span>Diastolic
          </div>
          <h2 className="text-xl font-bold font-manrope text-[30px] text-[#072635] leading-[19px] mb-5">78</h2>
          <div className="text-base font-manrope text-[14px] text-[#072635] leading-[19px]">Higher Than Average</div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
