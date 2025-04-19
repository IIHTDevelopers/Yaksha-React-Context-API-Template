import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useLanguage } from '../../context/LanguageContext';
import Content from '../../components/Content';

// Mock the useLanguage hook
jest.mock('../../context/LanguageContext', () => ({
    useLanguage: jest.fn(),
}));

describe('boundary', () => {
    it('ContentComponent boundary renders English content when language is "en"', () => {
        useLanguage.mockReturnValue({ language: 'en' });

        render(<Content />);

        expect(screen.getByText('Welcome to our website!')).toBeInTheDocument();
    });

    it('ContentComponent boundary renders Spanish content when language is "es"', () => {
        useLanguage.mockReturnValue({ language: 'es' });

        render(<Content />);

        expect(screen.getByText('¡Bienvenido a nuestro sitio web!')).toBeInTheDocument();
    });

    it('ContentComponent boundary renders French content when language is "fr"', () => {
        useLanguage.mockReturnValue({ language: 'fr' });

        render(<Content />);

        expect(screen.getByText('Bienvenue sur notre site web!')).toBeInTheDocument();
    });
});
