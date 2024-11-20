const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-8: Multiple Selection", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.cardClearAll(page);
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.summary).click();
    await iframe.locator(selector.status).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.creator }).click();
    await page.waitForTimeout(10000);

    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-8.json"));
})
