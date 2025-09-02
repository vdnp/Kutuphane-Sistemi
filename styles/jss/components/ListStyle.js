"use client";

import styled from "@emotion/styled";
import { colors } from "../mainStyles";

const ListWrapper = styled("div")({
  width: "100%",
  position: "relative",
});

const CardWrapper = styled("div")({
  gap: "4px",
  margin: "6px",
  justifyContent: "center",
  alignItems: "center",
});

const Card = styled("div")({
  alignItems: "center",
  justifyContent: "center",
});

const CardHeader = styled("h3")({
  fontSize: "15px",
  color: colors.textTitle,
  fontWeight: 600,
});

const CardContent = styled("p")({
  fontSize: "12px",
  color: colors.textPrimary,
});

export { ListWrapper, CardWrapper, Card, CardHeader, CardContent };
