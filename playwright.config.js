const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  
  reporter:
  [
    ['html',{outputFolder: 'playwright-report', open:'never'}],
    ['junit', {outputFile: 'results/test-results.xml' }]
  ],

  use: {
    //headless: false, screenshot: "only-on-failure", video: "on"
    headless: false, screenshot: "only-on-failure"
  },
  projects:
  [
    {name: "msedge yodayo test", testMatch: "yodayo.spec.js", 
      use:{browserName:"chromium", channel: "msedge"}}
  ]
});
