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

  const scoreCounts = rawBarData.reduce((acc, data) => {
    const score = data.score;
    acc[score] = (acc[score] || 0) + 1;
    return acc;
  }, {});

  const barGraphData = {
    labels: Object.keys(scoreCounts),
    datasets: [
      {
        label: "Cantidad",
        data: Object.values(scoreCounts),
        backgroundColor: "#D9526A",
      },
    ],
  };

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
      <div className="w-full h-1/2 flex flex-row items-center gap-4 overflow-hidden">
        <div className="w-1/2 p-4 min-h-[200px] h-full rounded-lg bg-white overflow-hidden">
          <Line data={lineGraphData} options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 0
            },
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Likes y comentarios (ultimas 5 publicaciones)",
                font: {
                  size: 20,
                },
                fullSize: true,
              }
            }
          }}/>
        </div>
        <div className="w-[23.5%] p-4 min-h-[200px] h-full rounded-lg bg-white overflow-hidden">
          <Chart type="bar" data={barGraphData} options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 0
            }
          }}/>
        </div>
        <div className="w-[23.5%] p-4 min-h-[200px] h-full rounded-lg bg-white overflow-hidden">
          <Pie data={pieGraphData} options={{
            responsive: true,
            maintainAspectRatio: false,

            animation: {
              duration: 0
            },
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Usuarios por municipio",
                font: {
                  size: 20,
                },
                fullSize: true,
              }
            }
          }}/>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row items-center gap-4 overflow-hidden">
      <div className="w-[63.5%] h-full p-4 min-h-[200px] rounded-lg bg-white overflow-hidden">
          <Line data={lineGraphData} options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 0
            }
          }}/>
        </div>
        <div className="w-[35%] p-4 min-h-[200px] h-full rounded-lg bg-white overflow-hidden">
          <Chart type="bar" data={barGraphData} options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 0
            },
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Testimonios",
                font: {
                  size: 20,
                },
                fullSize: true,
              }
            }
          }}/>
        </div>

      </div>
    </section>
  );
};
export default DashboardAdmin;
