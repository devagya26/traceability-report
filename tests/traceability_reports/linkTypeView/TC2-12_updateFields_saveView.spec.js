const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-12: Updated Field - Save View", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tpFilter(page);
    await page.waitForTimeout(3000);

    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.isBlockedBy }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.duplicates }).click();
    
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.issueT }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.storyCard }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.fixVersion }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.priority }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.assigneeCF , exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.statusCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.descriptionCF }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.summaryICF }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true  }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.created }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.creator }).click();
    await page.waitForTimeout(2000);
    await iframe.getByRole(selector.button, { name: selector.refresh }).click();
    await page.waitForTimeout(10000);

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.update).click();
    await page.pause();
})
