import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

const data = {
  labels: ["Red", "Orange", "Blue"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function ExpenseChart({ listItems }) {
  const chartData = {
    labels: listItems.map((data) => {
      const date = data.date.split("-");
      return date[1];
    }),
    datasets: [
      {
        label: "Expenses ",
        data: listItems.map((data) => data.sum),
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
    <div className="App">
      <PieChart chartData={chartData} />
    </div>
  );
}
