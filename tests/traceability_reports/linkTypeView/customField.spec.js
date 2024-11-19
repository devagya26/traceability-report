const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Custom Fields", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Inward' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Outward' }).click();
    await utils.download(page);
    await page.pause()
})
