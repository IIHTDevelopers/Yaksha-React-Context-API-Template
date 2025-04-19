import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../../components/LanguageSelector';

// Mock the useLanguage hook
jest.mock('../../context/LanguageContext', () => ({
    useLanguage: jest.fn(),
}));

describe('boundary', () => {
    const changeLanguage = jest.fn();

    beforeEach(() => {
        useLanguage.mockReturnValue({ changeLanguage });
    });

    it('LanguageSelectorComponent boundary renders the select element with language options', () => {
        render(<LanguageSelector />);

        // Check if all language options are present
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Spanish')).toBeInTheDocument();
        expect(screen.getByText('French')).toBeInTheDocument();
    });

    it('LanguageSelectorComponent boundary calls changeLanguage with "es" when Spanish is selected', () => {
        render(<LanguageSelector />);

        // Simulate selecting Spanish language
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'es' } });

        // Check if changeLanguage was called with 'es'
        expect(changeLanguage).toHaveBeenCalledWith('es');
    });

    it('LanguageSelectorComponent boundary calls changeLanguage with "fr" when French is selected', () => {
        render(<LanguageSelector />);

        // Simulate selecting French language
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'fr' } });

        // Check if changeLanguage was called with 'fr'
        expect(changeLanguage).toHaveBeenCalledWith('fr');
    });

    it('LanguageSelectorComponent boundary calls changeLanguage with "en" when English is selected', () => {
        render(<LanguageSelector />);

        // Simulate selecting English language
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'en' } });

        // Check if changeLanguage was called with 'en'
        expect(changeLanguage).toHaveBeenCalledWith('en');
    });
});
