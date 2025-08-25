"use client";

import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import Link from "next/link";

const DataTableContainer = styled("div")({
  backgroundColor: "#1F2937",
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "100%",
  overflowX: "auto",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  flexWrap: "wrap",
  gap: "12px",
});

const Table = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#fff",
  color: "#374151",
  borderRadius: "6px",
  overflow: "hidden",
});

const TableHead = styled("thead")({
  backgroundColor: "#F9FAFB",
});

const TableRow = styled("tr")({
  "&:nth-of-type(even)": {
    backgroundColor: "#F9FAFB",
  },
  "&:hover": {
    backgroundColor: "#F3F4F6",
  },
  transition: "background-color 0.2s ease",
});

const TableHeaderCell = styled("th", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "sortable",
})(({ sortable }) => ({
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: "600",
  fontSize: "14px",
  color: "#374151",
  borderBottom: "2px solid #E5E7EB",
  cursor: sortable ? "pointer" : "default",
  userSelect: "none",
  "&:hover": sortable
    ? {
        backgroundColor: "#E5E7EB",
      }
    : {},
}));

const TableCell = styled("td")({
  padding: "12px 16px",
  fontSize: "14px",
  color: "#4B5563",
  borderBottom: "1px solid #E5E7EB",
});

const ActionCell = styled("td")({
  padding: "12px 16px",
  borderBottom: "1px solid #E5E7EB",
});

const ActionContainer = styled("div")({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

const Pagination = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  marginTop: "20px",
  padding: "16px 0",
});

export {
  DataTableContainer,
  Pagination,
  ActionCell,
  ActionContainer,
  TableCell,
  Table,
  TableHeaderCell,
  TableRow,
  TableHead,
  Header,
};
