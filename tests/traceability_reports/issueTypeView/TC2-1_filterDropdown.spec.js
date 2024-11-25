const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-1: Filter Dropdown", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    await utils.filter(page);
    await page.pause();
})
