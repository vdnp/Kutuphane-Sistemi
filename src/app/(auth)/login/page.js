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
import ParticlesBackground from "@/components/ParticlesBackground";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    setloading(true);
    const succes = login(email, password);

    setTimeout(() => {
      if (succes) {
        alert("Giriş başarılı...");
        router.push("/dashboard");
      } else {
        alert("Hatalı Giriş.");
      }
      setloading(false);
    }, 1000);
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
      </LoginContainer>
    </>
  );
}
