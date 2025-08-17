"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleLogin = () => {
    const succes = login(email, password);
    if (succes) {
      router.push("/dashboard");
    } else {
      alert("Hatalı Giriş.");
    }
  };

  return (
    <div>
      <div>
        <h2>Giriş Yap</h2>
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Giriş</button>
      </div>
    </div>
  );
}
