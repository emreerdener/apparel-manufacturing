import { Stack, Image, Flex, Paper } from "@mantine/core";

interface ProductGalleryProps {
  images: string[];
  activeImage: string;
  onImageSelect: (img: string) => void;
}

export function ProductGallery({
  images,
  activeImage,
  onImageSelect,
}: ProductGalleryProps) {
  return (
    <Stack>
      <Paper withBorder radius="md">
        <Image src={activeImage} h={500} fit="cover" alt="Product view" />
      </Paper>
      <Flex gap="sm" justify="center">
        {images.map((img) => (
          <Image
            key={img}
            src={img}
            h={80}
            w={80}
            radius="sm"
            onClick={() => onImageSelect(img)}
            alt="Product image"
            style={{
              cursor: "pointer",
              border:
                activeImage === img
                  ? "2px solid var(--mantine-color-blue-6)"
                  : "none",
            }}
          />
        ))}
      </Flex>
    </Stack>
  );
}
