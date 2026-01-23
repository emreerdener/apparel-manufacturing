"use client";

import { Card, Skeleton, Group } from "@mantine/core";

export function SageProductCardSkeleton() {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Card.Section>
        <Skeleton height={190} radius={0} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Skeleton height={20} width="60%" radius="sm" />
      </Group>

      <Skeleton height={12} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="70%" radius="xl" />

      <Skeleton height={42} mt="md" radius="md" />
    </Card>
  );
}
