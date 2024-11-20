const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");
import { selector } from "../variables";

test("TC2-13: Updated Field - Save View", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.filter(page);
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByRole(selector.menu, { name: selector.filter1 }).click();
    await page.waitForTimeout(3000);

    await utils.issueClearAll(page);
    await iframe.locator(selector.subtask).click();
    await iframe.locator(selector.task).click();
    await iframe.locator(selector.epic).click();
    await page.waitForTimeout(2000);
    
    await utils.cardClearAll(page);
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.storyPoints).click();
    await iframe.locator(selector.fixVersions).click();
    await iframe.locator(selector.priorityICF).click();
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.status).click();
    await iframe.locator(selector.description).click();
    await iframe.locator(selector.summary).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.creator }).click();
    await page.waitForTimeout(2000);
    await iframe.getByRole(selector.button, { name: selector.refresh }).click();
    await page.waitForTimeout(10000);

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.update).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-13_updateAndSave.json"));
})
