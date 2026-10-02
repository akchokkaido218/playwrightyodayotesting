import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 2,
  
  reporter:[['html',{open:'never'}]],

  use: {
    headless: false,
    browserName: 'chromium',
  },
});
