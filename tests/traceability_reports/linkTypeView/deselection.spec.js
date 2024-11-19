const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Deselection", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.button, { name: selector.tableFields }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Parent' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Subtask' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Child Issues' }).click();
    await utils.download(page);
    await page.pause()
})
