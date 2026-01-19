'use client';

import { Card, Image, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';
import type { SageProduct } from '@/lib/sage';

interface SageProductCardProps {
    product: SageProduct;
}

export function SageProductCard({ product }: SageProductCardProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={product.imageUrl || "https://placehold.co/400x200?text=No+Image"}
                    height={160}
                    alt={product.name}
                    fallbackSrc="https://placehold.co/400x200?text=No+Image"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{product.name}</Text>
                {product.price && (
                    <Text c="dimmed" size="sm">Coming Soon</Text>
                    // In real app, we'd show user-specific pricing, but SAGE often hides it per config
                )}
            </Group>

            <Text size="sm" c="dimmed" lineClamp={3}>
                {product.description}
            </Text>

            <Button
                component={Link}
                href={`/catalog/product/${product.id}?suppId=${product.supplierId || ''}`}
                color="blue"
                fullWidth
                mt="md"
                radius="md"
            >
                View Details
            </Button>
        </Card>
    );
}
