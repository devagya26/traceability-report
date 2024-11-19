const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Save View", async ({page}) => {
    await utils.login(page);
    await utils.tvFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.saveView).click();
    await iframe.getByRole(selector.textBox).fill('Filter3');
    await iframe.locator(selector.submit).click();
    await page.pause();
})
