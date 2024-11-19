const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Multiple Selection in Both Fields", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 

    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Parent' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Is Blocked By' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Duplicates' }).click();
    
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Issue Type' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Assignee' }).click();
    await iframe.getByRole(selector.menuItem, { name: 'Status', exact: true }).click();

    await utils.download(page);
    await page.pause();
})
