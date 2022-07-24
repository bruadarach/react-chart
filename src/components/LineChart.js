import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ UserData }) => {
  const data = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: ["rgba(255, 99, 132)"],
        borderWidth: 2,
      },
      {
        label: "User lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["rgba(54, 162, 235)"],
        borderColor: ["rgba(54, 162, 235)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          max: 100000,
          stepSize: 10000,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User gain & lost",
        font: {
          size: 20,
        },
        padding: 15,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
