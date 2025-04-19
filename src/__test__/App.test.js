import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { LanguageProvider } from '../../src/context/LanguageContext';

// Mocking the components used in App
jest.mock('../components/Header', () => () => <div>Header</div>);
jest.mock('../components/Content', () => () => <div>Content</div>);
jest.mock('../components/LanguageSelector', () => () => <div>LanguageSelector</div>);

describe('boundary', () => {
  it('AppComponent boundary renders the Header component', () => {
    render(
      <LanguageProvider>
        <App />
      </LanguageProvider>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('AppComponent boundary renders the LanguageSelector component', () => {
    render(
      <LanguageProvider>
        <App />
      </LanguageProvider>
    );
    expect(screen.getByText('LanguageSelector')).toBeInTheDocument();
  });

  it('AppComponent boundary renders the Content component', () => {
    render(
      <LanguageProvider>
        <App />
      </LanguageProvider>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
