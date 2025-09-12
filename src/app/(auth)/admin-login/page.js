"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  LoginCard,
  LoginContainer,
  FooterText,
  FooterLink,
} from "../../../../styles/jss/pages/loginStyle";

import { CustomTitle } from "../../../../styles/jss/mainStyles";
import Button from "@/components/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import Input from "@/components/CustomInput";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const adminLogin = useAuthStore((s) => s.adminLogin);
  const router = useRouter();

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warning("Lütfen tüm alanları doldurunuz", {
        autoClose: 2000,
        closeOnClick: true,
      });
      return;
    }
    setloading(true);
    const res = await adminLogin(email, password);
    console.log(res);

    if (res.succes) {
      toast.success("Giriş Başarılı", {
        autoClose: 2000,
        icon: "✅",
        closeOnClick: true,
      });

      // Toast kapanma süresinden sonra yönlendir
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      toast.error("Giriş Başarısız", {
        autoClose: 2000,
        icon: "❌",
        closeOnClick: true,
      });
      resetFields();
    }
    setloading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginCard>
          <CustomTitle>Yetkili Giriş Yap</CustomTitle>
          <Input
            type="email"
            value={email}
            placeholder="Email adresiniz"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Şifreniz"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </Button>
        </LoginCard>
        <ToastContainer position="top-right" />
      </LoginContainer>
    </>
  );
}
