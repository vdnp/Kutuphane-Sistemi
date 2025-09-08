"use client";
import styled from "@emotion/styled";
import {
  ListWrapper,
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardText,
} from "styles/jss/components/ListStyle";
import Loading from "../Loading";

export default function List({ data, cardStyle = "default", loading = false }) {
  if (loading) return <Loading />;

  return (
    <ListWrapper>
      {data.map((item, index) => (
        <Card key={index} variant={cardStyle}>
          {cardStyle === "image" && item.image && (
            <CardImage src={item.image} alt={item.title} />
          )}
          <CardContent>
            <CardHeader>{item.title}</CardHeader>
            <CardText>Yazar: {item.author}</CardText>
            <CardText>Kategoriler: {item.category.join(",")}</CardText>
            <CardText>Stok Sayısı: {item.stock}</CardText>
            <CardText>
              Mevcutluk Dumuru: {item.available ? "Var" : "Yok"}
            </CardText>
          </CardContent>
        </Card>
      ))}
    </ListWrapper>
  );
}
