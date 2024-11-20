const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-29: Exporting Markdown, All Pages", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.exportAllMarkdown(page);
    await page.waitForTimeout(10000);
})

