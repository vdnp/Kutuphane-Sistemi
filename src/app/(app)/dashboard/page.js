"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@lib/api";

export default function DashBoardPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [currentMenu, setCurrentMenu] = useState();
  const [currentAltMenu, setCurrentAltMenu] = useState();
  const [loading, setLoading] = useState(false);
  //stats
  const [data, setData] = useState([]);
  const [dailyStats, setDailyStats] = useState([]);
  const [weeklyStats, setWeeklyStats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [yearlyStats, setYearlyStats] = useState([]);
  //
  const { currentUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("librarystats");
      const stats = response[0] || {};

      setDailyStats(stats.dailyStats || []);
      setWeeklyStats(stats.weeklyStats || []);
      setMonthlyStats(stats.monthlyStats || []);
      setYearlyStats(stats.yearlyStats || []);
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

  return <></>;
}
