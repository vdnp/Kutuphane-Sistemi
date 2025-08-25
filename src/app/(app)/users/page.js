"use client";

import { useEffect, useState } from "react";
import { users } from "dummyUsers";
import { apiRequest } from "@lib/api";
import DataTable from "@/components/DataTable";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const respose = await apiRequest("users");
      console.log(respose);
      setUsers(respose);
    } catch (error) {
      console.log("Users fetch err" + error);
    }
    setLoading(false);
  };

  const [columns, setColumns] = useState([
    { key: "name", label: "Ad", sortable: true },
    { key: "lastName", label: "SoyAd" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Telefon" },
    { key: "role", label: "Rol", sortable: true },
    { key: "created_at", label: "Oluşturulma Tarihi" },
    { key: "status", label: "Aktiflik" },
  ]);

  useEffect(() => {
    getData();
  }, []);

  return <DataTable data={users} columns={columns} />;
}
