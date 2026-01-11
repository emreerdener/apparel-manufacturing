import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  // Primary Color
  primaryColor: "teal",

  // Typography
  fontFamily:
    "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

  headings: {
    fontFamily:
      "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },

  // Components
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Container: {
      defaultProps: {
        size: "xl", // 1280px
      },
    },
    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});
