import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { BarChart } from "./BarChart";

Chart.register(CategoryScale);

// const data = {
//   labels: ["Red", "Orange", "Blue"],
//   // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//   datasets: [
//     {
//       label: "Popularity of colours",
//       data: [55, 23, 96],
//       // you can set indiviual colors for each bar
//       backgroundColor: [
//         "rgba(255, 255, 255, 0.6)",
//         "rgba(255, 255, 255, 0.6)",
//         "rgba(255, 255, 255, 0.6)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export default function ExpenseChart({ listItems }) {
  let sumByTime = {};

  listItems.map((data) => {
    const year = data.date.getFullYear().toString();
    const month = data.date.getMonth().toString();
    const monthYear = month + "." + year;
    if (sumByTime[monthYear] === undefined) {
      sumByTime[monthYear] = Number(data.sum);
    } else {
      sumByTime[monthYear] += Number(data.sum);
    }
  });

  console.log("sumByTime", sumByTime);

  const byYear = Object.keys(sumByTime);

  const chartData = {
    labels: byYear,
    datasets: [
      {
        label: "Expenses ",
        data: byYear.map((year) => sumByTime[year]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  console.log("listItems", listItems);
  console.log("chartData", chartData);
  console.log("type of chartData", typeof chartData.labels[0]);

  return (
    <div>
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  );
}
