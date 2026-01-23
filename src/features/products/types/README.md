# Product Types

This directory stores shared TypeScript interfaces and type definitions for the product feature.

## Files

### `index.ts`

Exports types used across the application.

- **`Product`**: (Legacy/Dummy) Basic interface for internal product mocks.
  - `id`, `title`, `image`, `price`, `category`, `description`.

_Note: We are transitioning to `SageProduct` types defined in `services/sageClient.ts`._
