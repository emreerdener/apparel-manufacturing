# Products Components

This directory contains React components related to the product catalog and display features.

## Components

### `CatalogSidebar`

A navigation sidebar displaying product categories.

- **Features**:
  - Sticky positioning (remains visible while scrolling).
  - Internal scroll area for long category lists.
  - Automatically highlights the active category based on the URL.

### `ProductList`

An async server component that fetches and displays a grid of products.

- **Props**:
  - `query` (string): The search term used to fetch products via `sageClient`.
- **Behavior**:
  - Fetches data server-side.
  - Renders a `SimpleGrid` of `SageProductCard` components.
  - Displays a "No products found" message if the result set is empty.

### `ProductListSkeleton`

A loading state component for the product list.

- **Usage**: Used as a `Suspense` fallback for `ProductList`.
- **Content**: Renders a grid of 8 `SageProductCardSkeleton` items.

### `SageProductCard`

Displays individual product information in a card format.

- **Props**:
  - `product` (SageProduct): The product data object.
- **Features**:
  - Displays product image with fallback.
  - Shows product name and brief description.
  - "View details" button linking to the individual product page.

### `SageProductCardSkeleton`

A skeleton loading placeholder for the `SageProductCard`.

- **Usage**: Used within `ProductListSkeleton` to mimic the layout of a loading product card.
