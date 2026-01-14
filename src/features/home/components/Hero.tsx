import {
  Stack,
  SimpleGrid,
  Image,
  Center,
  Title,
  Text,
  Button,
  Group,
  Anchor,
} from "@mantine/core";

export function Hero() {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={0}>
      {/* Left Column: Content */}
      <Center p="xl">
        <Stack gap="md" py="xl" maw={550}>
          <Title order={1} fz={{ base: 40, xs: 50 }} lh={1.2}>
            Manufacturing excellence
          </Title>
          <Text size="xl" c="dimmed">
            Family owned for 44 years. We source, customize, and deliver over
            10,000 premium products for brands of all sizes.
          </Text>
          <Group mt="md" gap="xl">
            <Button size="lg">Start an order</Button>
            <Anchor size="lg" underline="hover" fw={600}>
              View collection
            </Anchor>
          </Group>
        </Stack>
      </Center>

      {/* Right Column: Image */}
      <Image
        src="/images/martin-c.jpg"
        alt="Martin from Apparel Manufacturing"
        h={{ base: 500, md: "80vh" }}
        w="100%"
        fit="cover"
      />
    </SimpleGrid>
  );
}
