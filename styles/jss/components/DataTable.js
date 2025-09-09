"use client";

import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";

const DataTableContainer = styled("div")({
  backgroundColor: "#1F2937",
  color: "#fff",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "100%",
  overflowX: "auto",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  flexWrap: "wrap",
  gap: "8px",
});

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: "1",
  maxWidth: "400px",
});

const FilterContainer = styled("div")({
  display: "flex",
  alignItems: "center",
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
  padding: "10px 12px",
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
  padding: "10px 12px",
  fontSize: "14px",
  color: "#4B5563",
  borderBottom: "1px solid #E5E7EB",
});

const ActionCell = styled("td")({
  padding: "10px 12px",
  borderBottom: "1px solid #E5E7EB",
});

const ActionContainer = styled("div")({
  display: "flex",
  gap: "6px",
  alignItems: "center",
});

const Pagination = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  marginTop: "16px",
  padding: "12px 0",
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
  SearchContainer,
  FilterContainer,
};
