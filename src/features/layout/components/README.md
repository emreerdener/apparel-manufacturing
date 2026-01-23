# Layout Components

Components that define the global structure and navigation of the application.

## Components

### `MainAppShell`

The wrapper component for the entire application.

- Uses Mantine's `AppShell` to enforce layout (Header, Navbar, Main Content).
- Manages the state of the responsive mobile navigation menu.

### `Header`

The top navigation bar.

- Contains the Logo.
- Toggles for mobile menu (`Burger`).
- Access to global actions (Search, Cart, User Profile).

### `Footer`

The site footer.

- Displays branding, copyright, and secondary navigation links.

### `NavigationLinks`

A reusable list of navigation items (Home, Catalog, Services, etc.).

- Used in both the Desktop Header and Mobile Navbar.

### `CTASection`

A "Call to Action" banner often placed above the footer to encourage user conversion.

### `ThemeSwitch`

A toggle or button allow users to switch between Light and Dark interface modes.

### `Logo`

SVG or Image component rendering the brand logo.
