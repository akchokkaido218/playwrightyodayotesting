import {test, expect} from "@playwright/test";
test("I am testing", async({page})=>
    {
        await page.goto("https://www.amazon.in/");
        await expect(page).toHaveTitle(/Amazon/i);
        await page.waitForTimeout(5000);
    });
