"use client"
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

export default function App(props) {
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [];
    const labels = [];
    let code = "";
    if (props.data){
      for (let i = 0; i < props.data.length; i++){
        labels.push(Date.parse(props.data[i].timestamp));
        weight.push(props.data[i].value);
      }
<<<<<<< HEAD
      code = (props.data[0] || {'code':''}).code;
=======
      if (props.data.length > 0) {
        code = props.data[0].code;
      }
>>>>>>> f92a923276eaa2c6aeb95a4d31e241b681a34955
    }


    // const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    // const labels = [
    //   "Week 1",
    //   "Week 2",
    //   "Week 3",
    //   "Week 4",
    //   "Week 5",
    //   "Week 6",
    //   "Week 7",
    //   "Week 8",
    //   "Week 9",
    //   "Week 10"
    // ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: code,
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: 'time',
            min: props.minTimestamp,
            max: props.maxTimestamp,
          }
        }
      }
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="App">
      <span>{props.title}</span>
      <canvas id={props.title} ref={canvasEl} height={props.height} />
    </div>
  );
}
