const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Select All - Issue Card Fields", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.cardSelectAll(page);
    await utils.download(page);
    await page.pause()
})
