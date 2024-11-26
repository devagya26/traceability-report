const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-28: Exporting Markdown, Current Page", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.exportAsMarkdown(page);
})

