import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';

// Test component to use the language context
const TestComponent = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div>
            <p data-testid="language">{language}</p>
            <button onClick={() => changeLanguage('fr')}>Change to French</button>
        </div>
    );
};

describe('boundary', () => {
    it('LanguageContextComponent boundary provides the default language', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );
        // Check if default language is 'en'
        expect(screen.getByTestId('language')).toHaveTextContent('en');
    });

    it('LanguageContextComponent boundary changes the language when changeLanguage is called', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        );
        // Click button to change language
        screen.getByText('Change to French').click();
        // Check if language is updated to 'fr'
        expect(screen.getByTestId('language')).toHaveTextContent('fr');
    });
});
