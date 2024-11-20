const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-25: Verify Auto Hidden Columns", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.autoHide }).click();
    await page.waitForTimeout(2000);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-25.json"));
})

