"use client";

import { useEffect, useState } from "react";
import { users } from "dummyUsers";
import { apiRequest } from "@lib/api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const respose = await apiRequest("users");
      setUsers(respose);
    } catch (error) {
      console.log("Users fetch err" + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
}
