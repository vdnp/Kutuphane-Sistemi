"use client";

import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@lib/api";
import List from "../List";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuthStore();

  const getData = async () => {
    setLoading(true);
    try {
      const respose = await apiRequest("books");
      console.log(respose);
      setBooks(respose);
    } catch (error) {
      console.log("Books fetch err" + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!currentUser) return;

    getData();
  }, []);

  return <>{loading ? <Loading /> : <List data={books} />}</>;
}
