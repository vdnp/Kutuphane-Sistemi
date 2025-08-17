"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function registerPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const register = useAuthStore((s) => s.register);
  const router = useRouter();

  const handleRegister = () => {
    if (password === rePassword) {
      register(name, lastName, email, password);
      router.push("/dashboard");
    } else {
      alert("Şifreleriniz aynı değil.");
    }
  };

  return (
    <div>
      <div>
        <h2>Kayıt Ol</h2>
        <input
          value={name}
          placeholder="Adınız"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={lastName}
          placeholder="Soyadınız"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          value={email}
          placeholder="Mail Adresiniz"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Şifreniz"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={rePassword}
          placeholder="Şifreniz Tekrar"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button onClick={handleRegister}>Kayıt ol</button>
      </div>
    </div>
  );
}
