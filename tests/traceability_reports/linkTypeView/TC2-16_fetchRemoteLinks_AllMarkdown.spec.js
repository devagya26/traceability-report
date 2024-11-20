const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-16: Fetch Remote Links - All Markdown", async ({page}) => {
    test.setTimeout(100000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportAllMarkdown(page);
})
