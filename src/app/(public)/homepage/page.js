"use client";

import Books from "@/components/HomePage/Books";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Homepage() {
  const { currentUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <div
        style={{
          flex: 3,
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "",
          padding: "16px",
        }}
      >
        <Books cardStyle="list" />
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "16px",
        }}
      >
        Diğer içerik
      </div>
    </div>
  );
}
