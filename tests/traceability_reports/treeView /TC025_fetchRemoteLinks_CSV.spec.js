const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC025: Fetch Remote Links - CSV", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.fetchRemoteTreeView(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC025.json"));
})
