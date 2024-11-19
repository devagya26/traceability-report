const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Select All", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.issueSelectAll(page);
    await utils.download(page);
})
