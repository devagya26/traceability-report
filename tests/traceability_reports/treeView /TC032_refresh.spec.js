const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC032: Refresh", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await iframe.getByRole(selector.button, { name: selector.refresh }).click();
    await page.pause();
})
