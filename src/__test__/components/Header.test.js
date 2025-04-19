import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';

// Mock the useLanguage hook
jest.mock('../../context/LanguageContext', () => ({
    useLanguage: jest.fn(),
}));

describe('boundary', () => {
    it('HeaderComponent boundary displays "Current Language: English" when language is "en"', () => {
        useLanguage.mockReturnValue({ language: 'en' });

        render(<Header />);

        expect(screen.getByText('Current Language: English')).toBeInTheDocument();
    });

    it('HeaderComponent boundary displays "Current Language: Spanish" when language is "es"', () => {
        useLanguage.mockReturnValue({ language: 'es' });

        render(<Header />);

        expect(screen.getByText('Current Language: Spanish')).toBeInTheDocument();
    });

    it('HeaderComponent boundary displays "Current Language: French" when language is "fr"', () => {
        useLanguage.mockReturnValue({ language: 'fr' });

        render(<Header />);

        expect(screen.getByText('Current Language: French')).toBeInTheDocument();
    });
});
