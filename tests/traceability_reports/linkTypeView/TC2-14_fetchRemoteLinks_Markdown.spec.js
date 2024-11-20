const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-14: Fetch Remote Links - Markdown", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportAsMarkdown(page);
})
