const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Clear All", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.issueClearAll(page);
    await utils.download(page);
    await page.pause()
})
