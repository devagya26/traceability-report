const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Fetch Remote Links Enabled", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportCSV(page);
})
