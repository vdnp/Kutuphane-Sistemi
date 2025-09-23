"use client";

import {
  Chart as ChartJs,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ChartBar, ChartWrapper } from "styles/jss/components/Chart";
import { getRelativePosition } from "chart.js/helpers";
import { apiRequest } from "@lib/api";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Button from "./CustomButton";
import { FormatDate } from "styles/functions/generalFuncs";

ChartJs.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

export default function Chart({ type = "daily", data }) {
  const [index, setIndex] = useState(0);

  const dataList =
    type === "daily"
      ? data.dailyStats
      : type === "monthly"
      ? data.monthlyStats
      : data.yearlyStats;

  if (!dataList || dataList.length === 0) {
    return <p>Veri Bulunamadı</p>;
  }

  const stat = dataList[index];

  const labels = ["Ödünç", "İade", "İade-Ort", "Geciken"];
  const dataSetValue = [
    stat.totalBorrowedBooks,
    stat.totalReturnedBooks,
    stat.avgBorrowDuration,
    stat.overdueBooks,
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Kitap Verileri",
        data: dataSetValue,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < dataList.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <ChartWrapper>
      <ChartBar>
        <Button variant="primary" onClick={handlePrev} disabled={index === 0}>
          {" "}
          ←
        </Button>
        <span>{FormatDate(stat.date)}</span>
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={index === dataList.length - 1}
        >
          {" "}
          →
        </Button>
      </ChartBar>

      <Line data={chartData} />
      <span style={{ textAlign: "center" }}>
        {" "}
        {type === "daily"
          ? "Günlük Veriler"
          : type === "monthly"
          ? "Aylık Veriler"
          : "Yıllık Veriler"}{" "}
      </span>
    </ChartWrapper>
  );
}
