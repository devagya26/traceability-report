const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-23: Exporting Markdown, All Pages", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    await utils.exportAllMarkdown(page);
    await page.waitForTimeout(6000);
})

