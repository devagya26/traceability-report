const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-1: Filter Dropdown", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    await utils.tpFilter(page);
    await page.pause();
})
