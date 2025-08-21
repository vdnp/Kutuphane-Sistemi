"use client";

import styled from "@emotion/styled";

const RegisterContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f1f5f9",
  padding: "20px",
  zIndex: 0,
});

const RegsiterCard = styled("div")({
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  border: "1px solid #e2e8f0",
  zIndex: 1,
});

const FooterText = styled("p")({
  fontSize: "14px",
  textAlign: "center",
  margin: 0,
  color: "#6b7280",
  marginTop: "4px",
});

const FooterLink = styled("a")({
  color: "#4b5563",
  fontWeight: "500",
  textDecoration: "none",
  marginLeft: "4px",
  cursor: "pointer",
  "&:hover": {
    color: "#374151",
    textDecoration: "underline",
  },
});

export { RegisterContainer, RegsiterCard, FooterLink, FooterText };
