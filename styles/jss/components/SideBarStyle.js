"use client";

import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import Link from "next/link";

// Container
const SideBarContainer = styled("aside", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isOpen",
})(({ isOpen }) => ({
  width: isOpen ? "240px" : "70px",
  height: "100vh",
  backgroundColor: "#1F2937",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  transition: "width 0.3s ease",
  padding: "16px 8px",
  boxSizing: "border-box",
  position: "fixed",
  left: 0,
  top: 0,
}));

// Başlık
const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
  fontSize: "18px",
  fontWeight: "600",
});

// Link Container
const Nav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
});

// Link
const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: "#6B7280",
  },
  justifyContent: isOpen ? "flex-start" : "center",
}));

// Logout Button
const LogOutButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen }) => ({
  backgroundColor: "#DC2626",
  border: "none",
  padding: "10px",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: isOpen ? "flex-start" : "center",
  gap: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#B91C1C",
  },
}));

export { SideBarContainer, Header, Nav, NavLink, LogOutButton };
