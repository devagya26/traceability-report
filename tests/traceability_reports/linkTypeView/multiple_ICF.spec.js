const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Multiple Selection", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Issue Type' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Assignee' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Priority' }).click();
    await utils.download(page);
    await page.pause();
})
