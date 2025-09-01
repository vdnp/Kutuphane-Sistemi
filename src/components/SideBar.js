"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { LogOut, Menu } from "lucide-react";
import { routes } from "@/config/routes";
import {
  SideBarContainer,
  Header,
  Nav,
  NavLink,
} from "../../styles/jss/components/SideBarStyle";
import Button from "./CustomButton";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const { currentUser, logout } = useAuthStore();
  if (!currentUser) return null;

  return (
    <SideBarContainer isOpen={isOpen}>
      <Header>
        {isOpen && <span>Kütüphane</span>}
        <Menu
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Header>

      <Nav>
        {routes
          .filter((u) => u.roles.includes(currentUser.role))
          .map((u) => (
            <NavLink key={u.path} href={u.path} isOpen={isOpen}>
              <u.icon size={18} />
              {isOpen && u.name}
            </NavLink>
          ))}
      </Nav>

      <Button onClick={logout} isOpen={isOpen} variant="danger">
        <LogOut size={18} />
        {isOpen && "Çıkış Yap"}
      </Button>
    </SideBarContainer>
  );
}
