import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // Brand
  brandTitle: 'Design System',
  brandUrl: '/',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#FF385C',
  colorSecondary: '#FF385C',

  // UI
  appBg: '#0A0A0A',
  appContentBg: '#0A0A0A',
  appPreviewBg: '#0A0A0A',
  appBorderColor: '#1F1F1F',
  appBorderRadius: 14,

  // Text
  textColor: '#F7F7F7',
  textInverseColor: '#0A0A0A',
  textMutedColor: '#757575',

  // Toolbar
  barTextColor: '#AFAFAF',
  barSelectedColor: '#FF385C',
  barHoverColor: '#FF385C',
  barBg: '#0A0A0A',

  // Form
  inputBg: '#141414',
  inputBorder: '#1F1F1F',
  inputTextColor: '#F7F7F7',
  inputBorderRadius: 10,

  // Fonts
  fontBase: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  fontCode: "'JetBrains Mono', 'Fira Code', monospace",

  // Booleans
  booleanBg: '#141414',
  booleanSelectedBg: '#FF385C',

  // Grid
  gridCellSize: 10,

  // Button
  buttonBg: '#1F1F1F',
  buttonBorder: '#333333',
});
