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
  // Fix: Ensure we never pass an empty string to Image src
  const safeImageSrc =
    activeImage || "https://placehold.co/600x600/png?text=No+Image";

  return (
    <Stack>
      <Paper withBorder radius="md">
        <Image
          src={safeImageSrc}
          h={500}
          fit="cover"
          alt="Product view"
          // Optional: A fallback if the specific URL 404s
          fallbackSrc="https://placehold.co/600x600/png?text=Error"
        />
      </Paper>

      {/* Only render thumbnails if there are actual images to show */}
      {images.length > 0 && (
        <Flex gap="sm" justify="center" wrap="wrap">
          {images.map((img) => (
            <Image
              key={img}
              src={img}
              h={80}
              w={80}
              radius="sm"
              onClick={() => onImageSelect(img)}
              alt="Product thumbnail"
              style={{
                cursor: "pointer",
                border:
                  activeImage === img
                    ? "2px solid var(--mantine-color-blue-6)"
                    : "1px solid transparent",
              }}
            />
          ))}
        </Flex>
      )}
    </Stack>
  );
}
