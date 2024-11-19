const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Status - Issue Card Fields ", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Status', exact: true }).click();
    await utils.exportCSV(page);
    await page.pause();
});
