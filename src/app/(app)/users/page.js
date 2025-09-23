"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@lib/api";
import DataTable from "@/components/DataTable";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

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
    { key: "status", label: "Aktiflik" },
    { key: "createdAt", label: "Oluşturulma Tarihi" }, // datefield
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/admin-login");
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
    return (
      <Loading
        width="160px"
        height="110px"
        text="Yükleniyor..."
        pageCount={4}
      />
    );
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
