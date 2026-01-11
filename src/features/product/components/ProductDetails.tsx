import {
  Title,
  Text,
  Badge,
  Group,
  Stack,
  SimpleGrid,
  ThemeIcon,
  rem,
  ColorSwatch,
  NumberInput,
  Button,
  Paper,
  CheckIcon,
} from "@mantine/core";
import {
  IconTruck,
  IconShieldCheck,
  IconTemperature,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Product, ProductColor } from "../types";

interface ProductDetailsProps {
  product: Product;
  selectedColor: ProductColor;
  onColorSelect: (color: ProductColor) => void;
  quantity: number | string;
  onQuantityChange: (val: number | string) => void;
}

export function ProductDetails({
  product,
  selectedColor,
  onColorSelect,
  quantity,
  onQuantityChange,
}: ProductDetailsProps) {
  return (
    <Stack gap="md">
      {/* Header Section */}
      <div>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
          SKU: {product.sku}
        </Text>
        <Title order={1}>{product.title}</Title>
        <Group gap="xs" mt="xs">
          <Badge color="green" variant="light">
            In Stock
          </Badge>
          <Badge color="blue" variant="light">
            Customizable
          </Badge>
        </Group>
      </div>

      {/* Price */}
      <Text size="xl" fw={700} c="blue.8">
        ${product.price.toFixed(2)}
      </Text>

      {/* Description */}
      <Text c="dimmed" lh={1.6}>
        {product.description}
      </Text>

      {/* Feature List */}
      <SimpleGrid cols={2} verticalSpacing="xs">
        {product.features.map((feature) => (
          <Group key={feature} gap="xs">
            <ThemeIcon color="teal" size={20} radius="xl">
              <CheckIcon style={{ width: rem(12), height: rem(12) }} />
            </ThemeIcon>
            <Text size="sm">{feature}</Text>
          </Group>
        ))}
      </SimpleGrid>

      {/* Color Selection */}
      <Stack gap="xs">
        <Text fw={500}>
          Color: <span style={{ fontWeight: 400 }}>{selectedColor.name}</span>
        </Text>
        <Group gap="xs">
          {product.colors.map((color) => (
            <ColorSwatch
              key={color.name}
              component="button"
              color={color.hex}
              onClick={() => onColorSelect(color)}
              style={{
                color: "#fff",
                cursor: "pointer",
                border: "1px solid #dee2e6",
              }}
            >
              {selectedColor.name === color.name && (
                <CheckIcon style={{ width: rem(12), height: rem(12) }} />
              )}
            </ColorSwatch>
          ))}
        </Group>
      </Stack>

      {/* Actions */}
      <Group align="end">
        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={onQuantityChange}
          min={1}
          max={99}
          w={100}
        />
        <Button size="lg" flex={1} leftSection={<IconShoppingCart size={20} />}>
          Add to Cart
        </Button>
      </Group>

      {/* Trust Badges */}
      <Paper bg="gray.0" p="md" radius="md" mt="md">
        <Group gap="xl" justify="center">
          <Stack gap={0} align="center">
            <IconTemperature size={24} />
            <Text size="xs" mt={5}>
              24h Cold
            </Text>
          </Stack>
          <Stack gap={0} align="center">
            <IconShieldCheck size={24} />
            <Text size="xs" mt={5}>
              Lifetime Warranty
            </Text>
          </Stack>
          <Stack gap={0} align="center">
            <IconTruck size={24} />
            <Text size="xs" mt={5}>
              Fast Shipping
            </Text>
          </Stack>
        </Group>
      </Paper>
    </Stack>
  );
}
