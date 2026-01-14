"use client";

import { useState } from "react";
import {
  AspectRatio,
  Title,
  Stack,
  Text,
  Box,
  Overlay,
  Center,
  ActionIcon,
  Image,
} from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import classes from "./home.module.css";

export function HowItsDone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "2RrK-g3ka64";

  return (
    <Stack gap={100} w="100%" p="xl" pt={100} className={classes.videoSection}>
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

      {/* Video Container */}
      <Box
        pos="relative"
        style={{ borderRadius: "var(--mantine-radius-md)", overflow: "hidden" }}
      >
        <AspectRatio ratio={16 / 9} w="100%">
          {!isPlaying ? (
            /* 1. THE FACADE (Cover Image + Play Button) */
            <Box
              style={{ cursor: "pointer" }}
              onClick={() => setIsPlaying(true)}
            >
              {/* High Res Youtube Thumbnail */}
              <Image
                src="/images/thread.jpg"
                alt="Video Thumbnail"
                h="100%"
                w="100%"
                fit="cover"
              />

              {/* Dark Overlay to make the white button pop */}
              <Overlay color="#000" opacity={0.3} zIndex={1} />

              {/* Custom Play Button */}
              <Center pos="absolute" inset={0} style={{ zIndex: 2 }}>
                <ActionIcon
                  variant="filled"
                  color="teal"
                  radius={999}
                  h={{ base: 64, md: 120 }}
                  w={{ base: 64, md: 120 }}
                  aria-label="Play video"
                >
                  <IconPlayerPlayFilled
                    style={{ width: "45%", height: "45%" }}
                    color="white"
                  />
                </ActionIcon>
              </Center>
            </Box>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?si=gQFTlbBSpqxPZe0m&autoplay=1&rel=0`}
              title="Apparel Manufacturing Process"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </AspectRatio>
      </Box>
    </Stack>
  );
}
