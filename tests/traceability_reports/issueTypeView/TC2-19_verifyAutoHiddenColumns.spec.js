const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-19: Verify Auto Hidden Columns", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    });
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.autoHide }).click();
    await page.pause();
})

