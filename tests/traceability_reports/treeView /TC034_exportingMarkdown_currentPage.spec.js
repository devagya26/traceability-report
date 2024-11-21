const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC034: Exporting Markdown, Current Page", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.exportAsMarkdown(page);
})

