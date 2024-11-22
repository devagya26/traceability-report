const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC033: Exporting CSV, Current Page", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC033.json"));
})


