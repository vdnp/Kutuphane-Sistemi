"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@lib/api";
import Charts from "@/components/Charts";
import { ChartsList } from "styles/jss/components/Chart";

export default function DashBoardPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [currentMenu, setCurrentMenu] = useState();
  const [currentAltMenu, setCurrentAltMenu] = useState();
  const [loading, setLoading] = useState(false);

  //stats
  // const [data, setData] = useState([]);
  // const [dailyStats, setDailyStats] = useState([]);
  // const [weeklyStats, setWeeklyStats] = useState([]);
  // const [monthlyStats, setMonthlyStats] = useState([]);
  // const [yearlyStats, setYearlyStats] = useState([]);
  const [stats, setStats] = useState([]);
  //
  const { currentUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/admin-login");
  }, [currentUser, router]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("librarystats");
      const stats = response[0];
      setStats(stats);
      console.log(stats);
    } catch (error) {
      console.log("Books fetch err" + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!currentUser) return;

    getData();
  }, []);
  return (
    <>
      <ChartsList>
        <Charts type="daily" data={stats} />
        <Charts type="monthly" data={stats} />
        <Charts type="yearly" data={stats} />
      </ChartsList>
    </>
  );
}
