"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@lib/api";
import DataTable from "@/components/DataTable";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function UsersPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuthStore();

  const [columns, setColumns] = useState([
    { key: "title", label: "İsim", sortable: true },
    { key: "author", label: "yazar", sortable: true },
    { key: "category", label: "Kategori", sortable: true },
    { key: "isbn", label: "ISBN" },
    { key: "stock", label: "Stok Durumu", sortable: true },
    { key: "available", label: "Mevcutluk" },
    { key: "createDate", label: "Yazım Tarihi", sortable: true },
    { key: "createdAt", label: "Eklenme Tarihi" },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("books");
      console.log(response);
      setBooks(response);
    } catch (error) {
      console.log("Books fetch err" + error);
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
      data={books}
      columns={columns}
      onEdit={handleEdit}
      onDetails={handleDetails}
    />
  );
}
