"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

import {
  RegisterContainer,
  RegsiterCard,
  FooterText,
  FooterLink,
} from "../../../../styles/jss/pages/registerStyle";

import {
  CustomButton,
  CustomInput,
  CustomTitle,
} from "../../../../styles/jss/mainStyles";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function registerPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setloading] = useState(false);
  const register = useAuthStore((s) => s.register);
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !lastName || !email || !phone || !password || !rePassword) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    setloading(true);
    const newSucces = register(name, lastName, email, phone, password);

    setTimeout(() => {
      if (newSucces) {
        alert("Kaydınız başarıyla tamamlandı! Girişe yönlendiriliyorsunuz..");
        router.push("/dashboard");
      } else {
        alert("Bir hata meydana geldi..");
      }
      setloading(false);
    }, 1000);
  };

  return (
    <>
      <ParticlesBackground />
      <RegisterContainer>
        <RegsiterCard>
          <CustomTitle>Kayıt Ol</CustomTitle>
          <CustomInput
            value={name}
            placeholder="Adınız"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            value={lastName}
            placeholder="Soyadınız"
            onChange={(e) => setLastName(e.target.value)}
          />
          <CustomInput
            type="email"
            value={email}
            placeholder="Mail Adresiniz"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="tel"
            value={phone}
            placeholder="Telefon Numaranız"
            onChange={setPhone}
          />
          <CustomInput
            type="password"
            value={password}
            placeholder="Şifreniz"
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomInput
            type="password"
            value={rePassword}
            placeholder="Şifreniz Tekrar"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <CustomButton onClick={handleRegister}>Kayıt ol</CustomButton>
          <FooterText>
            Hesabın var mı?
            <FooterLink onClick={() => router.push("/login")}>
              Giriş Yap
            </FooterLink>
          </FooterText>
        </RegsiterCard>
      </RegisterContainer>
    </>
  );
}
