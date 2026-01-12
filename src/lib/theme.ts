import { createTheme } from "@mantine/core";

export const theme = createTheme({
  // Primary Color
  primaryColor: "teal",

  // Typography
  fontFamily:
    "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

  headings: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: "700",
  },

  // Components
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Title: {
      styles: {
        root: {
          letterSpacing: "-1px",
        },
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
