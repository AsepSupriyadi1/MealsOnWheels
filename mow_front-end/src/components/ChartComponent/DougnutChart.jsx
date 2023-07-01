import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ mealsData }) => {
  return (
    <>
      <Doughnut data={mealsData} />
    </>
  );
};

export default DoughnutChart;
