'use client';

import { NavLink, Paper, Title } from '@mantine/core';
import Link from 'next/link';

const CATEGORIES = [
    'Apparel',
    'Automotive',
    'Awards & Recognition',
    'Badges & Lanyards',
    'Bags',
    'Calendars',
    'Candy & Snacks',
    'Caps & Hats',
    'Clocks',
    'Computer Accessories',
    'Desk Items',
    'Eco Friendly',
    'Executive Gifts',
    'Food & Beverage',
    'Fun & Games',
    'Golf Items',
    'Healthcare',
    'Key Tags',
    'Kitchen & Home',
    'Mugs & Drinkware',
    'Pens',
    'Sport & Outdoor',
    'Stress Balls',
    'Tools & Hardware'
];

export function CatalogSidebar() {
    return (
        <Paper p="md" withBorder radius="md">
            <Title order={4} mb="md">Categories</Title>
            {CATEGORIES.map((cat) => (
                <NavLink
                    key={cat}
                    component={Link}
                    href={`/catalog?q=${encodeURIComponent(cat)}`}
                    label={cat}
                    variant="light"
                />
            ))}
        </Paper>
    );
}
