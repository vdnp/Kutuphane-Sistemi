"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@lib/api";
import { ChartsList } from "styles/jss/components/Chart";
import { CustomTitle } from "styles/jss/mainStyles";
import BookChart from "@/components/Charts/BooksChart";
import UsersChart from "@/components/Charts/UsersChart";

export default function DashBoardPage() {
  // const [selectedCard, setSelectedCard] = useState(0);
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
      <CustomTitle>Kitaplar</CustomTitle>
      <ChartsList>
        <BookChart type="daily" data={stats} />
        <BookChart type="monthly" data={stats} />
        <BookChart type="yearly" data={stats} />
      </ChartsList>
      <CustomTitle style={{ marginTop: "16px" }}>Kullanıcılar</CustomTitle>
      <ChartsList>
        <UsersChart type="daily" data={stats} />
        <UsersChart type="monthly" data={stats} />
        <UsersChart type="yearly" data={stats} />
      </ChartsList>
    </>
  );
}
