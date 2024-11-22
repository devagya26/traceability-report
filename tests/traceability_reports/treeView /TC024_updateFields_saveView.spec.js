const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC024: Updated Field - Save View", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();
    await iframe.locator(selector.medium).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.bug }).click();
    await iframe.locator(selector.task).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.childIssuesTV }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.isBlockedBy }).click();

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
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC024.json"));
})
