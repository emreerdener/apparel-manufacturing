import { AspectRatio, Title, Stack, Text } from "@mantine/core";
import classes from "./home.module.css";

export function HowItsDone() {
  return (
    <Stack gap={60} w="100%" p="xl" pt={60} className={classes.videoSection}>
      {/* Heading */}
      <Stack gap={0} align="center">
        <Title order={2} ta="center" fz={{ base: 32, sm: "40" }}>
          How it&apos;s done
        </Title>
        <Text c="dimmed" maw={600} ta="center" size="xl">
          See our manufacturing process in action.
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
            borderRadius: "var(--mantine-radius-lg)",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </Stack>
  );
}
