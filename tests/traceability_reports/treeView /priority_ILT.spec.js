const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Low - Priority & Parent, Subtask & Child Issue - Issue Link Type", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.low).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.subtaskTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.childIssuesTV }).click();
    await utils.exportCSV(page);
    await page.pause();
});
