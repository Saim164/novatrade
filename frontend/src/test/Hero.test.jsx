import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test('renders Hero iimage', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Heroimg');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero_edit.png');
    });
});