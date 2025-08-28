"use client";

import { useEffect, useState } from "react";
import { users } from "dummyUsers";
import { apiRequest } from "@lib/api";
import DataTable from "@/components/DataTable";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuthStore();

  const [columns, setColumns] = useState([
    { key: "name", label: "Ad", sortable: true },
    { key: "lastName", label: "SoyAd" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Telefon" },
    { key: "role", label: "Rol", sortable: true },
    { key: "created_at", label: "Oluşturulma Tarihi" },
    { key: "status", label: "Aktiflik" },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

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

  useEffect(() => {
    if (!currentUser) return;

    getData();
  }, []);

  if (!currentUser || loading) {
    return <p>Loading...</p>;
  }

  const handleEdit = (row) => console.log("Düzenle:", row);
  const handleDetails = (row) => console.log("Detay:", row);

  return (
    <DataTable
      data={users}
      columns={columns}
      onEdit={handleEdit}
      onDetails={handleDetails}
    />
  );
}
