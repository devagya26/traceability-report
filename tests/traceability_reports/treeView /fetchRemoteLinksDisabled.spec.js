const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Fetch Remote Links Disabled", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.fetchRemoteDisabled(page);
    await utils.exportCSV(page);
    await page.pause();
})
