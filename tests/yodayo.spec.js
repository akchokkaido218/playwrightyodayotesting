import {test, expect} from "@playwright/test";
test("I am testing", async({page})=>
    {
        await page.goto("https://yodayo.com/");
        await expect(page).toHaveTitle(/yodayo/i);
    });