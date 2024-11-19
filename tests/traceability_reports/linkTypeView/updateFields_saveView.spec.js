const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Updated Field - Save View", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByRole(selector.menu, { name: selector.filter2 }).click();

    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Parent' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Is Blocked By' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Duplicates' }).click();
    
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Issue Type' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Assignee' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Status', exact: true }).click();

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.update).click();
    await page.pause();
})
