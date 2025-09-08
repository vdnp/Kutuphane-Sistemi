"use client";

import styled from "@emotion/styled";
import { colors } from "../mainStyles";

const ListWrapper = styled("div")({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
});

const CardImage = styled("img")({
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
});

const Card = styled("div")(({ variant }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "16px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  ...(variant === "image" && {
    padding: "0",
    overflow: "hidden",
  }),
}));

const CardContent = styled("div")({
  padding: "12px",
});

const CardHeader = styled("h3")({
  fontSize: "15px",
  color: colors.textTitle,
  fontWeight: 600,
  marginBottom: "8px",
});

const CardText = styled("p")({
  fontSize: "12px",
  color: colors.textPrimary,
  lineHeight: "1.4",
});

export { ListWrapper, CardImage, Card, CardHeader, CardContent, CardText };
