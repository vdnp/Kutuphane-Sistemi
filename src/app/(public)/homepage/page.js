"use client";

import Books from "@/components/HomePage/Books";

export default function Homepage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <div
        style={{
          flex: 3,
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "",
          padding: "16px",
        }}
      >
        <Books cardStyle="list" />
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "16px",
        }}
      >
        Diğer içerik
      </div>
    </div>
  );
}
