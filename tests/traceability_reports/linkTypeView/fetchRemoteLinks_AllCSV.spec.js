const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Fetch Remote Links - All CSV", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportAllCSV(page);
})
