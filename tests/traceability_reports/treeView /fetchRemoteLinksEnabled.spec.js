const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Fetch Remote Links Enabled", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.fetchRemoteTreeView(page);
    await utils.exportCSV(page);
})
