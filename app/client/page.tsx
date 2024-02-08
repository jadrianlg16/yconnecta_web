"use client";
import 'chart.js/auto'
import { Bar, Chart, Line, Pie } from "react-chartjs-2";
const DashboardAdmin = () => {
  const rawLineData = [
    {
      date: "2021-08-01",
      comments: 10,
      likes: 20,
    },
    {
      date: "2021-08-02",
      comments: 5,
      likes: 30,
    },
    {
      date: "2021-08-03",
      comments: 40,
      likes: 100,
    },
    {
      date: "2021-08-04",
      comments: 100,
      likes: 50,
    },
    {
      date: "2021-08-05",
      comments: 9,
      likes: 20,
    },
  ];
  const lineGraphData = {
    labels: rawLineData.map((data) => data.date),
    datasets: [
      {
        label: "Comentarios",
        data: rawLineData.map((data) => data.comments),
        backgroundColor: "blue",
      },
      {
        label: "Likes",
        data: rawLineData.map((data) => data.likes),
        backgroundColor: "#D9526A",
      },
    ],
  };
  const rawBarData = [
    {
      score: 5,
    },
    {
      score: 4,
    },
    {
      score: 3,
    },
    {
      score: 2,
    },
    {
      score: 5,
    },
    {
      score: 5,
    },
    {
      score: 2,
    },
    {
      score: 4,
    },
    {
      score: 1,
    },
  ];


  const rawPieData = [
    {
      municipio: "Monterrey",
      cantidad: 100,
    },
    {
      municipio: "San Pedro",
      cantidad: 50,
    },
    {
      municipio: "San Nicolas",
      cantidad: 30,
    },
    {
      municipio: "Guadalupe",
      cantidad: 20,
    },
    {
      municipio: "Apodaca",
      cantidad: 10,
    },
  ];

  const pieGraphData = {
    labels: rawPieData.map((data) => data.municipio),
    datasets: [
      {
        label: "Personas",
        data: rawPieData.map((data) => data.cantidad),
        backgroundColor: [
          "#D9526A",
          "#F2994A",
          "#F2C94C",
          "#4ABD9A",
          "#4A4ABD",
        ],
      },
    ],
  };

  return (
    <section className="w-full h-full flex flex-col gap-8 overflow-hidden">

    </section>
  );
};
export default DashboardAdmin;
