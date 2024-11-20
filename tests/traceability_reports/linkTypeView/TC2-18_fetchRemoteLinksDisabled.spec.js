const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-18: Fetch Remote Links Disabled", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByLabel('page 2').click();
    await page.waitForTimeout(9000);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-18.json"));
})
