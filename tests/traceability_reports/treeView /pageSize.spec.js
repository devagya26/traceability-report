const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Page Size", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await iframe.getByRole(selector.button, {name: selector.pageSize}).click()
    await iframe.getByRole(selector.menu, { name: '10', exact: true }).click();
    await utils.exportCSV(page);
})
