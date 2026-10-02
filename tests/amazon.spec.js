import {test, expect} from "@playwright/test";
test("I am testing", async({page})=>
    {
        await page.goto("https://www.amazon.in/");
        await expect(page).toHaveTitle(/amazon/i);
        await page.waitForTimeout(3000);
    });