const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-27: Exporting CSV, All Pages", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.exportAllCSV(page);
    await page.waitForTimeout(10000)
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-27.json"));
})

