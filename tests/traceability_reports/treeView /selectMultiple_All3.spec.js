const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Multiple - Priority, Issue Type & Issue Link Type", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);

    await utils.priorityClearAll(page);
    await iframe.locator(selector.highest).click();
    await iframe.locator(selector.high).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.bug }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.subtaskTV }).click();

    await utils.exportCSV(page);
    await page.pause();
});
