const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select High - Priority & Bug - Issue Type", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.bug }).click();
    await utils.exportCSV(page);
    await page.pause();
});
