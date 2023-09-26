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

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    //Organises the data
    const weight = [];
    const labels = [];
    let code = "";
    let minTimestamp = "";
    let maxTimestamp = "";
    if (props.data){
      minTimestamp = Date.parse(props.data[0].timestamp);
      maxTimestamp = Date.parse(props.data[props.data.length-1].timestamp);
        for (let i = 0; i < props.data.length; i++){
          labels.push(Date.parse(props.data[i].timestamp));
          weight.push(props.data[i].value);
        }
      if (props.data.length > 0) {
        code = props.data[0].code;
      }
    }

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
                min: minTimestamp,
                max: maxTimestamp,
                ticks: {
                    display: props.showAllLabels ? true : false
                }
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
    <div className="barChart bg-gray-200 rounded p-2">
      <div>
        <span className="font-semibold">{props.title}</span>
        {props.fullScreenButton}
      </div>
      <canvas id={props.title} ref={canvasEl} height={props.height} />
    </div>
  );
}
