const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-19: Page Size", async ({page}) => {
    test.setTimeout(90000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.getByRole(selector.button, {name: selector.pageSize}).click()
    await iframe.getByRole(selector.menu, { name: '10', exact: true }).click();
    await page.pause();
})
