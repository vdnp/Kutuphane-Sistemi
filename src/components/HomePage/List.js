"use client";
import {
  ListWrapper,
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardText,
} from "styles/jss/components/ListStyle";
import DataTable from "../DataTable";
import Loading from "../Loading";
import { useState } from "react";

export default function List({ data, cardStyle = "default", loading = false }) {
  if (loading) return <Loading />;
  const handleEdit = (row) => console.log("Düzenle:", row);
  const handleDetails = (row) => console.log("Detay:", row);
  const [columns, setColumns] = useState([
    { key: "title", Label: "Başlık", sortable: true },
    { key: "author", Label: "Yazar" },
    { key: "isbn", Label: "İSBN Numarası" },
    { key: "category", Label: "Kategoriler" },
    { key: "stock", Label: "Stok" },
    { key: "available", Label: "Mevcut" },
    { key: "createDate", Label: "Eklenme Tarihi" },
  ]);

  if (cardStyle === "list") {
    return (
      <DataTable
        data={data}
        columns={columns}
        onEdit={handleEdit}
        onDetails={handleDetails}
      />
    );
  }

  return (
    <ListWrapper variant={cardStyle}>
      {data.map((item, index) => (
        <Card key={index} variant={cardStyle}>
          {/* sadece image görünümünde resim olacak */}
          {cardStyle === "image" && item.cover_image && (
            <CardImage src={item.cover_image} alt={item.title} />
          )}

          <CardContent>
            <CardHeader>{item.title}</CardHeader>
            <CardText>Yazar: {item.author}</CardText>
            <CardText>Kategoriler: {item.category.join(", ")}</CardText>
            <CardText>Stok Sayısı: {item.stock}</CardText>
            <CardText>
              Mevcutluk Durumu: {item.available ? "Var" : "Yok"}
            </CardText>
          </CardContent>
        </Card>
      ))}
    </ListWrapper>
  );
}
