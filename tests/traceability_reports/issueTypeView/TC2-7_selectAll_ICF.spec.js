const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-7: Select All", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    await utils.cardSelectAll(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-7_selectAll_ICF.json"));
})
