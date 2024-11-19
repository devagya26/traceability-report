const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Verify Auto Hidden Columns", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.autoHide }).click();
    await page.pause();
})

