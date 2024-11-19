const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-20: Exporting CSV, Current Page", async ({page}) => {
    test.setTimeout(40000)
    await utils.login(page);
    await utils.filter(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-20_exportCsv_currentPage.json"));
})

