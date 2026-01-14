"use client";

import Link from "next/link";
import { Button, Card, Stack, Text, Title } from "@mantine/core";
import classes from "./layout.module.css";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Your promotional ecosystem",
  description = 'From complex "cut and sew" apparel to high-volume promotional hard goods, we have the infrastructure to handle your most demanding orders.',
  buttonText = "Get a quote",
  buttonLink = "/products",
}: CTASectionProps) {
  return (
    <Card className={classes.footerCta} py={100} radius={0}>
      <Stack align="center">
        <Stack align="center" maw={640}>
          <Title
            order={2}
            fz={{ base: 32, sm: 40 }}
            ta="center"
            lh={1.2}
            c="white"
          >
            {title}
          </Title>
          <Text ta="center" c="white" size="xl">
            {description}
          </Text>

          <Button
            component={Link}
            href={buttonLink}
            size="lg"
            mt="md"
            variant="default"
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
