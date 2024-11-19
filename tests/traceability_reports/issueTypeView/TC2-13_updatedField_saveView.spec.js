const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");
import { selector } from "../variables";

test("TC2-13: Updated Field - Save View", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.filter(page);
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByRole(selector.menu, { name: selector.filter1 }).click();
    await page.waitForTimeout(3000)

    await utils.issueClearAll(page);
    await iframe.locator(selector.subtask).click();
    await iframe.locator(selector.task).click();
    await iframe.locator(selector.epic).click();
    
    await utils.cardClearAll(page);
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.description).click();

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByRole(selector.menu, { name: selector.filter1 }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-13_updateAndSave.json"));
})
