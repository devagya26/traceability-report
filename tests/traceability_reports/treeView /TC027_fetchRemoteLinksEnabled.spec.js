const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC027: Fetch Remote Links Enabled", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.fetchRemoteTreeView(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC027.json"));

})

