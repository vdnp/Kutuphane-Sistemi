"use client";

import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import Link from "next/link";

const DataTableContainer = styled("div")({
  backgroundColor: "#1F2937",
  color: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  marginBottom: "16px",
});

const Table = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #e5e7eb",
});

const TableHead = styled("thead")({
  backgroundColor: "#f3f4f6",
});

const TableRow = styled("tr")({
  borderBottom: "1px solid #e5e7eb",
  "&:hover": {
    backgroundColor: "#f9fafb",
  },
});

const TableHeaderCell = styled("th", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "sortable",
})(({ sortable }) => ({
  border: "1px solid #e5e7eb",
  padding: "8px",
  textAlign: "left",
  cursor: sortable ? "pointer" : "default",
}));

const TableCell = styled("td")({
  border: "1px solid #e5e7eb",
  padding: "8px",
});

const ActionCell = styled("td")({
  border: "1px solid #e5e7eb",
  padding: "8px",
  display: "flex",
  gap: "8px",
});

const Pagination = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
  marginTop: "16px",
});

export {
  DataTableContainer,
  Pagination,
  ActionCell,
  TableCell,
  Table,
  TableHeaderCell,
  TableRow,
  TableHead,
  Header,
};
