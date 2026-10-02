import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 2,

  use: {
    headless: false,
    browserName: 'chromium',
  },
});
