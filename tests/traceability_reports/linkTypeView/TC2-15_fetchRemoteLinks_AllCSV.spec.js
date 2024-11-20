const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-15: Fetch Remote Links - All CSV", async ({page}) => {
    test.setTimeout(100000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.exportAllCSV(page);
    await utils.convertAndCompareAllCSV(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-15.json"));
})
