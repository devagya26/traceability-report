const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Fix Versions - Issue Card Fields ", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Fix versions' }).click();
    await utils.exportCSV(page);
    await page.pause();
});
