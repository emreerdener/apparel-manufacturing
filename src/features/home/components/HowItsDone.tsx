import { AspectRatio, Title, Stack, Text } from "@mantine/core";
import classes from "./home.module.css";

export function HowItsDone() {
  return (
    <Stack gap={60} w="100%" p="xl" pt={60} className={classes.videoSection}>
      {/* Heading */}
      <Stack gap="xs" align="center">
        <Title order={2} ta="center" fz={{ base: 32, sm: "40" }}>
          How it&apos;s done
        </Title>
        <Text c="dimmed" maw={800} ta="center" size="xl">
          Generations of manufacturing expertise with state-of-the-art equipment
          ensures your merchandise is produced to the highest standard, right
          here in the USA.
        </Text>
      </Stack>

      {/* Video */}
      <AspectRatio ratio={16 / 9} w="100%">
        <iframe
          src="https://www.youtube.com/embed/2RrK-g3ka64?si=gQFTlbBSpqxPZe0m"
          title="Apparel Manufacturing Process"
          style={{
            border: 0,
            overflow: "hidden",
            borderRadius: "var(--mantine-radius-md)",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </Stack>
  );
}
