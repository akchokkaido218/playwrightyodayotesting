const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  workers: 2,
  
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
    {name: "msedge amazon test", testMatch: "amazon.spec.js", 
      use:{browserName:"chromium", channel:"msedge"}},
    {name: "msedge yodayo test", testMatch: "yodayo.spec.js", 
      use:{browserName:"chromium", channel: "msedge"}}
  ]
});
