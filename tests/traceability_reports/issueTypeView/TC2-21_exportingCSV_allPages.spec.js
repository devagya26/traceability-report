const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-21: Exporting CSV, All Pages", async ({page}) => {
    test.setTimeout(45000)
    await utils.login(page);
    await utils.filter(page);
    await utils.exportAllCSV(page);
    await page.waitForTimeout(6000);
    await utils.convertAndCompareAllCSV(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-21_exportingCSV_allPages.json"));
})

