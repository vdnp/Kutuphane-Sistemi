"use client";

import { useState, useMemo } from "react";
import { CustomButton, CustomInput } from "styles/jss/mainStyles";
import {
  DataTableContainer,
  ActionCell,
  Header,
  Pagination,
  Table,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  FilterContainer,
  SearchContainer,
} from "styles/jss/components/DataTable";
import { TableBody } from "@mui/material";

export default function DataTable({
  columns,
  data,
  filters,
  searchKey = false,
  onEdit,
  onDetails,
  pageSize = 10,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [processData, setProcessData] = useState([]);

  const processedData = useMemo(() => {
    let result = [...data];
    if (filter) {
      result = result.filter((item) => (item.status = filter));
    }

    if (sortKey) {
      result.sort((a, b) => {
        const valA = String(a[sortKey]).toLowerCase();
        const valB = String(b[sortKey]).toLowerCase();
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, search, filter, sortKey, sortOrder, columns]);

  const totalPages = Math.ceil(processedData.length / pageSize);
  const paginatedData = processedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const handleReset = () => {
    setFilter("");
    setPage(1);
    setSearch("");
    setSortKey(null);
    setSortOrder("asc");
  };

  return (
    <DataTableContainer>
      <Header>
        <SearchContainer>
          <CustomInput
            placeholder="Ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>

        <FilterContainer>
          <CustomButton onClick={() => handleReset()}>
            Filtreleri Sıfırla
          </CustomButton>
        </FilterContainer>
      </Header>

      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableHeaderCell
                key={col.key}
                sortable={col.sortable}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                {col.label}
                {col.sortable && sortKey === col.key && (
                  <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                )}
              </TableHeaderCell>
            ))}
            {(onEdit || onDetails) && (
              <TableHeaderCell>Aksiyonlar</TableHeaderCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((col) => (
                  <TableCell key={col.key}>{row[col.key]}</TableCell>
                ))}
                {(onEdit || onDetails) && (
                  <ActionCell>
                    {onEdit && (
                      <CustomButton
                        style={{ marginRight: "5px" }}
                        onClick={() => onEdit(row)}
                      >
                        Düzenle
                      </CustomButton>
                    )}
                    {onDetails && (
                      <CustomButton
                        variant="outline"
                        size="sm"
                        onClick={() => onDetails(row)}
                      >
                        Detay
                      </CustomButton>
                    )}
                  </ActionCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + 1}
                style={{ textAlign: "center", padding: "16px" }}
              >
                Veri bulunamadı
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination>
        <CustomButton
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Önceki
        </CustomButton>
        <span>
          Sayfa {page} / {totalPages}
        </span>
        <CustomButton
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Sonraki
        </CustomButton>
      </Pagination>
    </DataTableContainer>
  );
}
