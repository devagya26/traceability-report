const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-7: Select All - Issue Card Fields", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    await utils.tpFilter(page);
    await page.waitForTimeout(4000)
    await utils.cardSelectAll(page);
    await page.waitForTimeout(12000)
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.menuItem, { name: selector.updated }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.lastViewed }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-7.json"));

})
