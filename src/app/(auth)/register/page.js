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
import { toast, ToastContainer } from "react-toastify";

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

  const resetFields = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRePassword("");
  };

  const handleRegister = async () => {
    if (!name || !lastName || !email || !phone || !password || !rePassword) {
      toast.warning("Lütfen tüm alanları doldurunuz", {
        autoClose: 2000,
        closeOnClick: true,
      });
      return;
    }

    if (password !== rePassword) {
      toast.error("Şifreler eşleşmiyor", {
        autoClose: 2000,
        closeOnClick: true,
      });
      return;
    }

    setloading(true);
    const newSucces = await register(name, lastName, email, phone, password);
    console.log(newSucces);

    if (newSucces.succes) {
      toast.success(
        "Kaydınız başarıyla tamamlandı! Girişe yönlendiriliyorsunuz..",
        {
          autoClose: 2000,
          icon: "✅",
          closeOnClick: true,
        }
      );
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      toast.error("Bu mail adresi zaten kayıtlı", {
        autoClose: 2000,
        icon: "❌",
        closeOnClick: true,
      });
      resetFields();
    }
    setloading(false);
  };

  return (
    <>
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
            onChange={(e) => setPhone(e.target.value)}
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
          <CustomButton onClick={handleRegister} disabled={loading}>
            Kayıt ol
          </CustomButton>
          <FooterText>
            Hesabın var mı?
            <FooterLink onClick={() => router.push("/login")}>
              Giriş Yap
            </FooterLink>
          </FooterText>
        </RegsiterCard>
        <ToastContainer position="top-right" />
      </RegisterContainer>
    </>
  );
}
