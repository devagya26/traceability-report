const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-10: Multiple Selection in Both Fields", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 

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

    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-10.json"));
})
