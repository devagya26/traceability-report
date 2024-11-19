const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Fetch Remote Links - Markdown", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportAsMarkdown(page);
})
