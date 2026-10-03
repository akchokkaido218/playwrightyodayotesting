const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  workers: 2,
  
  reporter:[['html',{open:'never'}]],

  use: {
    headless: false
  },
  projects:
  [
    {name: "msedge amazon test", testMatch: "amazon.spec.js", 
      use:{browserName:"chromium", channel:"msedge"}},
    {name: "msedge yodayo test", testMatch: "yodayo.spec.js", 
      use:{browserName:"chromium", channel: "msedge"}}
  ]
});
