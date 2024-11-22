const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-7: Select Maximum - Issue Card Fields", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    await utils.tpFilter(page);
    await page.waitForTimeout(4000)
    await utils.cardSelectMax(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-7.json"));
})
