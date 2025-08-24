"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { books } from "../../../../dummyBooks";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea,
  Typography,
} from "@mui/material";
import { CustomButton } from "../../../../styles/jss/mainStyles";

export default function DashBoardPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const { currentUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  if (!currentUser) return null;

  const cards = [
    {
      id: 1,
      title: "Kitaplar",
      description: "Kitap listesine gitmek için tıklayın.",
    },
    {
      id: 2,
      title: "Kullanıcılar",
      description: "Kullanıcı listesine gitmek için tıklayın.",
    },
    // {
    //   id: 3,
    //   title: "Humans",
    //   description: "Humans depend on plants and animals for survival.",
    // },
  ];

  return (
    <Box
      sx={{
        width: "%100",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={index}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
