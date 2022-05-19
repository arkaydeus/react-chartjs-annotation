import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    },
    annotation: {
      annotations: {
        box1: {
          // Indicates the type of annotation
          type: "box",
          xMin: 1,
          xMax: 2,
          yMin: 50,
          yMax: 70,
          backgroundColor: "rgba(255, 99, 132, 0.25)"
        }
      }
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1
    }
  ]
};

export function App() {
  return (
    <div>
      <h1>Example react-chartjs-2 Chart with the annotation plugin</h1>
      <Line options={options} data={data} />;
    </div>
  );
}
