const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-22: Refresh", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.getByRole(selector.button, { name: selector.refresh }).click();
    await page.pause();
})