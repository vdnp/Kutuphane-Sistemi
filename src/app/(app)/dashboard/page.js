"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function DashBoardPage() {
  const { currentUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  if (!currentUser) return null;

  return <div>burası dolacak</div>;
}
