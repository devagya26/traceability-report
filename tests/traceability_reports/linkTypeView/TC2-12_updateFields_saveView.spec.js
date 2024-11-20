const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-12: Updated Field - Save View", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByRole(selector.menu, { name: selector.filter2 }).click();

    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.isBlockedBy }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.duplicates }).click();
    
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.issueT }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.assigneeCF }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.statusCF , exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.creator }).click();
    await page.waitForTimeout(10000);

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.update).click();
    await page.pause();
})
