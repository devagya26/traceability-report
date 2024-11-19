const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-9: Multiple ICF", async ({page}) => {
  test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    await utils.cardClearAll(page);
    const iframe = page.frame({
        url: selector.src
      }); 
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.description).click();
    await iframe.getByRole(selector.menuItem, { name: selector.projectCF, exact: true }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.workRatio }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.created }).click();
    await page.waitForTimeout(5000);

    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-9_multiple_ICF.json"));
    await page.pause();
})
