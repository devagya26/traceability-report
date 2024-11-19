const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Multiple - Priority, Issue Type, Issue Link Type & Issue Card Fields", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);

    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();

    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.assigneeCF }).click();

    await utils.exportCSV(page);
    await page.pause();
});
