const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC003: Clear All - Priority", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC003.json"));
});
