# Product Hooks & Utilities

This directory contains hooks and utility classes for interacting with external product APIs (specifically SAGE).

## Files

### `sageClient.ts`

This file exports the `SageClient` class and a singleton instance `sageClient`. It handles communication with the SAGE Member API to search for and retrieve promotional product data.

#### `SageClient` Class

**Configuration:**

- Reads credentials from environment variables:
  - `SAGE_API_BASE_URL`
  - `SAGE_API_LOGIN_ID`
  - `SAGE_API_PASSWORD`
  - `SAGE_ACCOUNT_NUMBER`
  - `SAGE_API_KEY`

**Methods:**

- **`searchProducts(query: string): Promise<SageProduct[]>`**
  - Searches for products using a keyword query.
  - Maps the raw SAGE API response to a simplified `SageProduct` interface.
  - Returns an empty array if the search fails or no products are found.

- **`getProduct(id: string): Promise<SageProductDetail | null>`**
  - Retrieves detailed information for a specific product by ID.
  - Tries multiple SAGE services (Service 105, then falls back to 104) to ensure data availability.
  - Maps raw response to `SageProductDetail` including colors, sizes, and supplier info.
  - Returns `null` if the product is not found.

#### Types

- **`SageProduct`**: Basic product info (id, name, description, image, price).
- **`SageProductDetail`**: Extended product info including full description, colors, sizes, and item code.
