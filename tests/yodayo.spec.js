import {test, expect} from "@playwright/test";
test("I am testing", async({page}, testInfo)=>
    {
        testInfo.annotations.push({type: 'test_key', description: 'AT-2'})
        await page.goto("https://yodayo.com/");
        await expect(page).toHaveTitle(/yodayo/i);
        await page.screenshot({path:"screenshots/yodayopage.png", fullPage: true});
        await expect(page).toHaveURL('https://yodayo.com/');
    });