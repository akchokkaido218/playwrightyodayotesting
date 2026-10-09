import {test, expect} from "@playwright/test";
test("I am testing", {tag: '@QAT-1'}, async({page})=>
    {
        await page.goto("https://yodayo.com/");
        await expect(page).toHaveTitle(/yodayo/i);
        await page.screenshot({path:"screenshots/yodayopage.png", fullPage: true});
        await expect(page).toHaveURL('https://yodayo.com/');
    });