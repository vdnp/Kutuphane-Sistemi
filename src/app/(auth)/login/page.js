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

import {
  CustomButton,
  CustomInput,
  CustomTitle,
} from "../../../../styles/jss/mainStyles";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.warning("Lütfen tüm alanları doldurun", {
        autoClose: 2000,
        closeOnClick: true,
      });
      return;
    }
    setloading(true);
    const succes = login(email, password);

    if (succes) {
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
          <CustomTitle>Giriş Yap</CustomTitle>
          <CustomInput
            type="email"
            value={email}
            placeholder="Email adresiniz"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="password"
            value={password}
            placeholder="Şifreniz"
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton onClick={handleLogin} disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </CustomButton>
          <FooterText>
            Hesabın yok mu?
            <FooterLink onClick={() => router.push("/register")}>
              Kayıt Ol
            </FooterLink>
          </FooterText>
        </LoginCard>
        <ToastContainer position="top-right" />
      </LoginContainer>
    </>
  );
}
