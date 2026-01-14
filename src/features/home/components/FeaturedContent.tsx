"use client";

import { Center, Grid, Image, Stack, Text, Title } from "@mantine/core";

export default function FeaturedContent() {
  return (
    <Stack p="xl" gap="xl">
      <Grid gutter="xl" justify="center" align="center">
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
          <Center>
            <Stack gap="xs" py="xl" maw={600}>
              <Title order={2} fz={{ base: 32, sm: 40 }}>
                Generations of service
              </Title>
              <Text size="xl" c="dimmed">
                Founded in 1981, we are a third-generation, family-owned
                business serving clients from aviation to healthcare. From our
                humble beginnings as a staff of two, we have grown into one of
                the most trusted names in the industry, delivering branded
                solutions nationwide and internationally.
              </Text>
            </Stack>
          </Center>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
          <Image
            src="/images/building.jpg"
            alt="Apparel Manufacturing headquarters"
            radius="md"
            h={500}
            w="100%"
            fit="cover"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 3, md: 3 }}>
          <Image
            src="/images/machines-c.jpg"
            alt="Embroidery and screen printing machinery"
            radius="md"
            h={500}
            w="100%"
            fit="cover"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 4, md: 4 }}>
          <Center>
            <Stack gap="xs" py="xl" maw={600}>
              <Title order={2} fz={{ base: 32, sm: 40 }}>
                In-house precision
              </Title>
              <Text size="xl" c="dimmed">
                Every stitch matters. Our Lilburn, GA facility handles custom
                cut-and-sew, embroidery, and screen printing under one roof.
                Whether you need complex corporate uniforms or promotional hard
                goods, our philosophy is simple: when providing solutions for
                our clients, &quot;no&quot; is not an option.
              </Text>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
