const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC010: Select All - Issue Type", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.issueTypeSelectAll(page);
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC010.json"));
});
