import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Таблица</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Затраты по месяцу и году",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
