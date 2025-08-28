"use client";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { keyframes } from "@emotion/react";

const flipAnimation = keyframes({
  "0%": { transform: "rotateY(0deg)" },
  "50%": { transform: "rotateY(-180deg)" },
  "100%": { transform: "rotateY(0deg)" },
});

const LoaderContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  padding: "20px",
});

const Book = styled("div", {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== "width" && prop !== "height",
})((props) => ({
  position: "relative",
  width: props.width || "120px",
  height: props.height || "80px",
  perspective: "1200px",
  transformStyle: "preserve-3d",
}));

const Cover = styled("div", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "side",
})((props) => ({
  position: "absolute",
  top: 0,
  width: "50%",
  height: "100%",
  background:
    props.side === "left"
      ? "linear-gradient(135deg, #4a90e2, #357abd)"
      : "linear-gradient(135deg, #d64541, #b23a37)",
  border: "2px solid #2c3e50",
  boxShadow: `
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.3)
  `,
  ...(props.side === "left"
    ? {
        left: 0,
        borderRadius: "8px 2px 2px 8px",
        zIndex: 1,
        "&::before": {
          content: "''",
          position: "absolute",
          top: "10%",
          left: "10%",
          right: "20%",
          bottom: "70%",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2px",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          top: "30%",
          left: "10%",
          right: "20%",
          bottom: "40%",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "1px",
        },
      }
    : {
        right: 0,
        borderRadius: "2px 8px 8px 2px",
        zIndex: 1,
        "&::before": {
          content: "''",
          position: "absolute",
          top: "10%",
          left: "20%",
          right: "10%",
          bottom: "70%",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2px",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          top: "30%",
          left: "20%",
          right: "10%",
          bottom: "40%",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "1px",
        },
      }),
}));

const Spine = styled("div")({
  position: "absolute",
  top: 0,
  left: "48%",
  width: "4%",
  height: "100%",
  background: "linear-gradient(to right, #2c3e50, #34495e, #2c3e50)",
  border: "1px solid #1a252f",
  zIndex: 2,
});

const PageContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "50%",
  height: "100%",
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
});

const Page = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to right, #fefefe, #f8f8f8)",
  border: "1px solid #ddd",
  borderLeft: "none",
  borderRadius: "0 6px 6px 0",
  boxShadow: `
    -2px 0 4px rgba(0, 0, 0, 0.1),
    inset -1px 0 2px rgba(0, 0, 0, 0.05)
  `,
  "&::before": {
    content: "''",
    position: "absolute",
    top: "15%",
    left: "8%",
    right: "15%",
    height: "2px",
    background: "#ddd",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: "25%",
    left: "8%",
    right: "25%",
    height: "1px",
    background: "#eee",
    boxShadow: `
      0 8px 0 #eee,
      0 16px 0 #eee,
      0 24px 0 #eee
    `,
  },
});

const FlipPage = styled(PageContainer, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "delay",
})((props) => ({
  animation: `${flipAnimation} 1.8s infinite ease-in-out`,
  animationDelay: props.delay || "0s",
  zIndex: 10 - (parseInt(props.delay) || 0) * 2,
}));

const LoaderText = styled("p")({
  fontSize: "16px",
  color: "#555",
  fontWeight: 500,
  margin: 0,
  textAlign: "center",
});

export {
  LoaderContainer,
  LoaderText,
  flipAnimation,
  FlipPage,
  Book,
  Page,
  Cover,
  Spine,
  PageContainer,
};
