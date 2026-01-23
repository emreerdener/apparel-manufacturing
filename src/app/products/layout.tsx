import { Grid, GridCol } from "@mantine/core";
import { CatalogSidebar } from "@/features/products/components";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid gutter={0}>
      <GridCol span={{ base: 12, sm: 6, md: 3 }}>
        <CatalogSidebar />
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, md: 9 }}>{children}</GridCol>
    </Grid>
  );
}
