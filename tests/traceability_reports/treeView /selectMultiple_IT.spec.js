const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Multiple selection - Issue Type", async ({page}) => {
    test.setTimeout(45000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.bug }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.taskIT }).click();
    await iframe.getByRole(selector.button, { name: selector.issueT }).click();
    await utils.expand(page);
    await utils.exportCSV(page);
    await page.pause();
});
