import { Container, Title, SimpleGrid, TextInput, Button, Group, Text } from '@mantine/core';
import { sageClient } from '@/lib/sage';
import { SageProductCard } from '@/features/sage/SageProductCard';
import { IconSearch } from '@tabler/icons-react';

export default async function CatalogPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const params = await searchParams;
    const query = params.q || 'pen'; // Default search to show something

    const products = await sageClient.searchProducts(query);

    return (
        <>
            <Title order={1} mb="xl">Product Catalog: {query}</Title>

            <form action="/catalog" method="get">
                <Group mb="xl">
                    <TextInput
                        name="q"
                        placeholder="Search products..."
                        defaultValue={query}
                        // leftSection={<IconSearch size={16} />}
                        style={{ flex: 1 }}
                    />
                    <Button type="submit">Search</Button>
                </Group>
            </form>

            {products.length === 0 ? (
                <Text>No products found for "{query}". (Check API connection if this persists)</Text>
            ) : (
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
                    {products.map((product) => (
                        // <div key={product.id}>{product.name}</div>
                        <SageProductCard key={product.id} product={product} />
                    ))}
                </SimpleGrid>
            )}
        </>
    );
}
