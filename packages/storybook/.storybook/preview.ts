import type { Preview } from '@storybook/web-components';
import '@ds/core/dist/components';
import theme from './theme';

// Import the base token CSS (light defaults under :root)
import '@ds/core/dist/ds-core/ds-core.css';

const darkTokens: Record<string, string> = {
  '--ds-color-bg-primary': '#0a0a0a',
  '--ds-color-bg-secondary': '#141414',
  '--ds-color-bg-tertiary': '#1f1f1f',
  '--ds-color-bg-elevated': '#1f1f1f',
  '--ds-color-bg-inverse': '#ffffff',
  '--ds-color-bg-brand': '#2A1015',
  '--ds-color-bg-brand-subtle': '#1E0C0F',
  '--ds-color-bg-success': '#0C1F17',
  '--ds-color-bg-warning': '#1F1A0C',
  '--ds-color-bg-danger': '#1F0C10',
  '--ds-color-bg-info': '#150C1F',
  '--ds-color-bg-glass': 'rgba(20, 20, 20, 0.72)',
  '--ds-color-bg-overlay': 'rgba(0, 0, 0, 0.65)',
  '--ds-color-fg-primary': '#f7f7f7',
  '--ds-color-fg-secondary': '#afafaf',
  '--ds-color-fg-tertiary': '#757575',
  '--ds-color-fg-inverse': '#141414',
  '--ds-color-fg-brand': '#ff5c5c',
  '--ds-color-fg-link': '#ff5c5c',
  '--ds-color-fg-link-hover': '#ff8a8a',
  '--ds-color-fg-success': '#34d399',
  '--ds-color-fg-warning': '#fbbf24',
  '--ds-color-fg-danger': '#fb7185',
  '--ds-color-fg-info': '#a78bfa',
  '--ds-color-fg-disabled': '#545454',
  '--ds-color-fg-on-brand': '#ffffff',
  '--ds-color-border-default': '#1f1f1f',
  '--ds-color-border-subtle': '#141414',
  '--ds-color-border-strong': '#545454',
  '--ds-color-border-focus': '#ff5c5c',
  '--ds-color-border-error': '#fb7185',
  '--ds-color-border-success': '#34d399',
  '--ds-color-border-brand': '#ff385c',
  '--ds-color-action-primary': '#ff385c',
  '--ds-color-action-primary-hover': '#ff5c5c',
  '--ds-color-action-primary-active': '#ff8a8a',
  '--ds-color-action-secondary': '#ffffff',
  '--ds-color-action-secondary-hover': '#e2e2e2',
  '--ds-color-action-tertiary': '#1f1f1f',
  '--ds-color-action-tertiary-hover': '#333333',
  '--ds-color-action-danger': '#f43f5e',
  '--ds-color-action-danger-hover': '#fb7185',
  '--ds-color-action-success': '#10b981',
  '--ds-color-action-warning': '#f59e0b',
  '--ds-color-action-ghost-hover': '#1f1f1f',
  '--ds-color-gradient-brand': 'linear-gradient(135deg, #FF385C 0%, #E31C5F 50%, #BD1E59 100%)',
};

const lightTokens: Record<string, string> = {
  '--ds-color-bg-primary': '#ffffff',
  '--ds-color-bg-secondary': '#fafafa',
  '--ds-color-bg-tertiary': '#f7f7f7',
  '--ds-color-bg-elevated': '#ffffff',
  '--ds-color-bg-inverse': '#141414',
  '--ds-color-bg-brand': '#fff5f5',
  '--ds-color-bg-brand-subtle': '#FFF0F1',
  '--ds-color-bg-success': '#ecfdf5',
  '--ds-color-bg-warning': '#fffbeb',
  '--ds-color-bg-danger': '#fff1f2',
  '--ds-color-bg-info': '#f5f3ff',
  '--ds-color-bg-glass': 'rgba(255, 255, 255, 0.72)',
  '--ds-color-bg-overlay': 'rgba(0, 0, 0, 0.45)',
  '--ds-color-fg-primary': '#141414',
  '--ds-color-fg-secondary': '#545454',
  '--ds-color-fg-tertiary': '#afafaf',
  '--ds-color-fg-inverse': '#ffffff',
  '--ds-color-fg-brand': '#ff385c',
  '--ds-color-fg-link': '#ff385c',
  '--ds-color-fg-link-hover': '#e31c5f',
  '--ds-color-fg-success': '#059669',
  '--ds-color-fg-warning': '#b45309',
  '--ds-color-fg-danger': '#e11d48',
  '--ds-color-fg-info': '#7c3aed',
  '--ds-color-fg-disabled': '#cbcbcb',
  '--ds-color-fg-on-brand': '#ffffff',
  '--ds-color-border-default': '#e2e2e2',
  '--ds-color-border-subtle': '#efefef',
  '--ds-color-border-strong': '#cbcbcb',
  '--ds-color-border-focus': '#ff385c',
  '--ds-color-border-error': '#f43f5e',
  '--ds-color-border-success': '#10b981',
  '--ds-color-border-brand': '#ff5c5c',
  '--ds-color-action-primary': '#ff385c',
  '--ds-color-action-primary-hover': '#e31c5f',
  '--ds-color-action-primary-active': '#c5134e',
  '--ds-color-action-secondary': '#141414',
  '--ds-color-action-secondary-hover': '#1f1f1f',
  '--ds-color-action-tertiary': '#efefef',
  '--ds-color-action-tertiary-hover': '#e2e2e2',
  '--ds-color-action-danger': '#f43f5e',
  '--ds-color-action-danger-hover': '#e11d48',
  '--ds-color-action-success': '#10b981',
  '--ds-color-action-warning': '#f59e0b',
  '--ds-color-action-ghost-hover': '#f7f7f7',
  '--ds-color-gradient-brand': 'linear-gradient(135deg, #FF385C 0%, #E31C5F 50%, #BD1E59 100%)',
};

const applyTheme = (mode: string) => {
  const root = document.documentElement;
  const body = document.body;
  const tokens = mode === 'dark' ? darkTokens : lightTokens;

  // Set every token directly on :root — this always wins over imported CSS
  for (const [key, value] of Object.entries(tokens)) {
    root.style.setProperty(key, value);
  }

  body.style.backgroundColor = mode === 'dark' ? '#0A0A0A' : '#ffffff';
  body.style.color = mode === 'dark' ? '#F7F7F7' : '#141414';
  body.style.fontFamily = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif";
  body.style.webkitFontSmoothing = 'antialiased';
  body.style.transition = 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
};

const VIEWPORTS = {
  mobile:      { name: 'Mobile',       styles: { width: '375px',  height: '667px' } },
  mobileLarge: { name: 'Mobile Large', styles: { width: '414px',  height: '896px' } },
  tablet:      { name: 'Tablet',       styles: { width: '768px',  height: '1024px' } },
  laptop:      { name: 'Laptop',       styles: { width: '1024px', height: '768px' } },
  desktop:     { name: 'Desktop',      styles: { width: '1280px', height: '800px' } },
  desktopWide: { name: 'Desktop Wide', styles: { width: '1536px', height: '960px' } },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (story, context) => {
      const mode = context.globals.theme || 'dark';
      applyTheme(mode);
      return story();
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    viewport: { viewports: VIEWPORTS },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'padded',
    docs: { theme },
  },
};

export default preview;
