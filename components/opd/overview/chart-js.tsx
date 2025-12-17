"use client";
import { Card } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartJs = () => {
  const data = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย."],
    datasets: [
      {
        label: "จำนวนผู้ป่วย",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "สถิติผู้ป่วยรายเดือน",
      },
    },
  };
  return (
    <Card className="w-full border-border bg-card pt-0">
      <Bar data={data} options={options} />
    </Card>
  );
};
export default ChartJs;
