const { test } = require("@playwright/test");
const path = require("path");
import { utils } from "../utils";

test("TC2-2: Select All", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.issueSelectAll(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-2_selectAll.json"));
})
