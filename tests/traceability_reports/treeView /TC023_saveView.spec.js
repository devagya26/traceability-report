const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC023: Save View with new name", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    await utils.tvFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.saveView).click();
    await iframe.getByRole(selector.textBox).fill('New Filter 3');
    await iframe.locator(selector.submit).click();
    await page.pause();
})
