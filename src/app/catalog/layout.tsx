import { Container, Grid, GridCol } from '@mantine/core';
import { CatalogSidebar } from '@/features/sage/CatalogSidebar';

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Container size="xl" py="xl">
            <Grid>
                <GridCol span={{ base: 12, md: 3 }}>
                    <CatalogSidebar />
                </GridCol>
                <GridCol span={{ base: 12, md: 9 }}>
                    {children}
                </GridCol>
            </Grid>
        </Container>
    );
}
