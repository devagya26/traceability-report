const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Single Selection", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Fix versions' }).click();
    await utils.download(page);
    await page.pause();
})
