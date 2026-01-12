"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Center, SegmentedControl, useMantineColorScheme } from "@mantine/core";

export function ThemeSwitch() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value) => setColorScheme(value as "light" | "dark")}
      size="sm"
      data={[
        {
          value: "light",
          label: (
            <Center style={{ gap: 10 }}>
              <IconSun size={18} />
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center style={{ gap: 10 }}>
              <IconMoon size={18} />
            </Center>
          ),
        },
      ]}
    />
  );
}
