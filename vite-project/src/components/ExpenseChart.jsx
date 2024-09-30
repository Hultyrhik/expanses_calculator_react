import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { BarChart } from "./BarChart";
import { stringYearMonthToDate } from "../funcs/utilis";

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
    const dateElements = data.date.split("-");
    const year = dateElements[0];
    const month = dateElements[1];
    const monthYear = month + "." + year;
    if (sumByTime[monthYear] === undefined) {
      sumByTime[monthYear] = Number(data.sum);
    } else {
      sumByTime[monthYear] += Number(data.sum);
    }
  });

  const byYearMonth = Object.keys(sumByTime);
  byYearMonth.sort(
    (a, b) => stringYearMonthToDate(a) - stringYearMonthToDate(b)
  );

  const chartDataByDate = {
    labels: byYearMonth,
    datasets: [
      {
        label: "Expenses ",
        data: byYearMonth.map((year) => sumByTime[year]),
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

  let sumByCategory = {};
  listItems.map((data) => {
    console.log("???map-map", data);

    if (sumByCategory[data.category] === undefined) {
      sumByCategory[data.category] = Number(data.sum);
    } else {
      sumByCategory[data.category] += Number(data.sum);
    }
  });

  const byByCategory = Object.keys(sumByCategory);

  console.log("???sumByCategory", sumByCategory);

  const chartDataByCategory = {
    labels: byByCategory,
    datasets: [
      {
        label: "Expenses ",
        data: byByCategory.map((catogory) => sumByCategory[catogory]),
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

  return (
    <div>
      <PieChart chartData={chartDataByCategory} />
      <BarChart chartData={chartDataByDate} />
    </div>
  );
}
