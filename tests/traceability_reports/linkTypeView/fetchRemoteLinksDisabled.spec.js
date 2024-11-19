const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Fetch Remote Links Disabled", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByLabel('page 2').click();
    await page.waitForTimeout(3000);
    await utils.exportCSV(page);
})
