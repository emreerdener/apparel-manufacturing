"use client";

import { NavLink, Paper, Title, ScrollArea } from "@mantine/core";
import Link from "next/link";

const CATEGORIES = [
  "Apparel",
  "Automotive",
  "Awards & Recognition",
  "Badges & Lanyards",
  "Bags",
  "Calendars",
  "Candy & Snacks",
  "Caps & Hats",
  "Clocks",
  "Computer Accessories",
  "Desk Items",
  "Eco Friendly",
  "Executive Gifts",
  "Food & Beverage",
  "Fun & Games",
  "Golf Items",
  "Healthcare",
  "Key Tags",
  "Kitchen & Home",
  "Mugs & Drinkware",
  "Pens",
  "Sport & Outdoor",
  "Stress Balls",
  "Tools & Hardware",
];

export function CatalogSidebar() {
  return (
    <Paper
      p="md"
      withBorder
      radius={0}
      style={{
        borderLeft: "none",
        borderTop: "none",
        borderBottom: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title order={4} mb="md">
        Categories
      </Title>
      <ScrollArea style={{ flex: 1 }}>
        {CATEGORIES.map((cat) => (
          <NavLink
            key={cat}
            component={Link}
            href={`/products?q=${encodeURIComponent(cat)}`}
            label={cat}
            variant="light"
          />
        ))}
      </ScrollArea>
    </Paper>
  );
}
