import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const IncomeGraph = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const chartHeight = chartRef.current.chartArea.bottom;
      const newGradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      newGradient.addColorStop(0, "#ef0101");  // Bright red at the top
      newGradient.addColorStop(0.5, "#d80102"); // Slightly darker red in the middle
      newGradient.addColorStop(1, "#920101");  // Darkest red at the bottom
      setGradient(newGradient);
    }
  }, []);
  

  const data = {
    labels: [
      "0-2yrs", 
      "12-14yrs", "14-16yrs", "16-18yrs", "18-20yrs", "20-22yrs", "22-24yrs", "24-26yrs"
    ],
    datasets: [
      {
        data: [0, 29, 8, 29, 10, 25, 14, 22, 20, 27, 20, 30, 37],
        borderColor: "black",
        backgroundColor: gradient || "#800000", // Fallback to dark red
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: true,
        grid: { display: false },
      },
      y: {
        display: true,
        min: 0,
        max: 40,
        grid: { display: false },
      },
    },
  };

  return (
    <div className="flex w-full items-center justify-center bg-gray-2 p-4">
      <div className="bg-white p-6 shadow-lg w-full">


        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 border-2  border-gray rounded-xl p-4">
            <Line ref={chartRef} data={data} options={options} />
          </div>

          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg mt-6 md:mt-0 md:pl-6">
          <h2 className="text-3xl font-bold text-left text-gray">
      Why Choose <span className="text-red">Digital Marketing?</span>
    </h2>
            <p className="mt-4 text-black">
              Ranked as the second-best job, a career in the data domain provides a fast track for advancement.
            </p>
         
            <p className="mt-2 text-black text-md">
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsucv
            </p>
            <h3 className="mt-5 text-center font-bold text-lg">Most In-Demand</h3>
            <p className="text-gray text-center md:text-center mt-5">
              Digital marketing is the fastest-growing industry.It is growing at 25% to 30% per year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeGraph;