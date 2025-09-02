"use client";

import styled from "@emotion/styled";

const AppContainer = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#f9fafbb7", // genel arka plan
  color: "#111827",
});

const DashboardContent = styled("main")({
  flex: 1,
  padding: "24px",
  marginLeft: "240px", // Sidebar genişliği (dinamik hale de getirilebilir)
  transition: "margin-left 0.3s ease",
  boxSizing: "border-box",
});

const Content = styled("main")({
  flex: 1,
  padding: "24px",
  boxSizing: "border-box",
});

const PageContainer = styled("div")(({ center, maxWidth }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: center ? "center" : "flex-start",
  justifyContent: center ? "center" : "flex-start",
  width: "100%",
  height: "100%",
  maxWidth: maxWidth || "100%", // default full, istersen "800px" falan verebilirsin
  margin: "0 auto",
  padding: "24px",
  boxSizing: "border-box",
}));

const CustomTitle = styled("h1")({
  fontSize: "28px",
  fontWeight: "600",
  margin: 0,
  textAlign: "center",
  color: "#374151",
  marginBottom: "8px",
});

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const colors = {
  primary: "#2563EB",
  secondary: "#F59E0B",
  accent: "#10B981",
  danger: "#fa1505",
  warning: "#d9c816",
  info: "#054efa",
  disabled: "#d1d5db",
  disabledText: "#6b7280",
  backgroundL: "#F9FAFB",
  backgroundD: "#111827",
  textTitle: "#9cc9bbff",
  textPrimary: "#1F2937",
  textSecondary: "#8aa9a5ff",
  textLight: "#fff",
  border: "#E5E7EB",
};

export {
  hexToRgb,
  colors,
  AppContainer,
  DashboardContent,
  Content,
  PageContainer,
  CustomTitle,
};
