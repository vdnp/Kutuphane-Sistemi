"use client";
import styled from "@emotion/styled";
import {
  ListWrapper,
  CardWrapper,
  Card,
  CardContent,
} from "styles/jss/components/ListStyle";

const StyledList = styled("div")(({ cardStyle }) => {
  const cardStyles = {
    default: {},
    image: {},
  };
});

export default function List({ data, image = false, cardStyle = "default" }) {
  return;
  <ListWrapper></ListWrapper>;
}
