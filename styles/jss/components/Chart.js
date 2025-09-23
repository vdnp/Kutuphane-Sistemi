"use client";

import styled from "@emotion/styled";

const ChartWrapper = styled("div")({
  background: "#fff",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ChartBar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

const ChartsList = styled("div")({
  width: "100%",
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

export { ChartWrapper, ChartBar, ChartsList };
