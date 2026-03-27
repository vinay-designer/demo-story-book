import StyleDictionary from 'style-dictionary';

const PREFIX = 'ds';

// Light theme (default)
const sdLight = new StyleDictionary({
  source: [
    'src/primitive/**/*.json',
    'src/semantic/light.json',
    'src/component/**/*.json',
  ],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: ':root' },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: PREFIX,
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: { outputReferences: true },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      prefix: PREFIX,
      buildPath: 'dist/ts/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
  },
});

// Dark theme overrides
const sdDark = new StyleDictionary({
  source: [
    'src/primitive/**/*.json',
    'src/semantic/dark.json',
    'src/component/**/*.json',
  ],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '[data-theme="dark"]' },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: PREFIX,
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_dark.scss',
          format: 'scss/variables',
          options: { outputReferences: true },
        },
      ],
    },
  },
});

async function build() {
  await sdLight.buildAllPlatforms();
  await sdDark.buildAllPlatforms();

  // Create index.js that re-exports all tokens
  const fs = await import('fs');
  fs.writeFileSync(
    'dist/ts/index.js',
    `export * from './tokens.js';\n`,
  );
  fs.writeFileSync(
    'dist/ts/index.d.ts',
    `export * from './tokens';\n`,
  );

  console.log('✓ Tokens built successfully');
}

build().catch((err) => {
  console.error('Token build failed:', err);
  process.exit(1);
});
