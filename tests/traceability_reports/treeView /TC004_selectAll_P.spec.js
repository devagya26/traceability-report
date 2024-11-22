const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC004: Select All - Priority", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.prioritySelectAll(page);
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC004.json"));
});
