const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC028: Fetch Remote Links Disabled", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.fetchRemoteDisabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC028.json"));
})
