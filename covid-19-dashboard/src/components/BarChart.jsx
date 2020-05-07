import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

import styles from './BarChart.module.css';

const BarChart = ({ data }) => {
  const { country, cases, deaths, tests } = data;

  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['Total Cases', 'New Cases', 'Total Deaths', 'Total Tests'],
      datasets: [
        {
          label: 'Bar Chart',
          data: [
            cases.total,
            cases.new ? parseInt(cases.new.substr(1)) : null,
            deaths.total,
            tests.total,
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
        {
          label: 'Line Chart',
          data: [
            cases.total,
            cases.new ? parseInt(cases.new.substr(1)) : null,
            deaths.total,
            tests.total,
          ],
          backgroundColor: ['rgba(25, 99, 132, 0.05)'],
          type: 'line',
          // this dataset is drawn on top
          order: 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: country === 'All' ? 'Global' : `Current Situation in ${country}`,
      },
      legend: { display: true },
      scales: {
        yAxes: [
          {
            // type: 'logarithmic',
            ticks: {
              //   beginAtZero: false,
              min: 0,
            },
          },
        ],
      },
    },
  };

  const [barChartInstance, setBarChartInstance] = useState(null);
  const chartContainer = useRef(null);

  useEffect(() => {
    if (barChartInstance) {
      barChartInstance.destroy();
    }
    const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
    setBarChartInstance(newChartInstance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartContainer, data]);

  return (
    <div className={styles.container}>
      <canvas ref={chartContainer} />
    </div>
  );
};
export default BarChart;