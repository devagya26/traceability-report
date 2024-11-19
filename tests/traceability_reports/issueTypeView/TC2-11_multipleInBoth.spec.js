const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-11: Multiple Selection in Both Fields", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 

    await utils.issueClearAll(page);
    await iframe.locator(selector.subtask).click();
    await iframe.locator(selector.task).click();
    await iframe.locator(selector.epic).click();
    await page.waitForTimeout(2000);
    
    await utils.cardClearAll(page);
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.summary).click();
    await iframe.locator(selector.status).click();
    await iframe.locator(selector.fixVersions).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.creator }).click();
    await page.waitForTimeout(10000);

    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-11_multipleInBoth.json"));
})
