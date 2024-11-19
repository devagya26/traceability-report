const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Select All - Issue Type", async ({page}) => {
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.issueTypeSelectAll(page);
    await utils.exportCSV(page);
    await page.pause();
});
