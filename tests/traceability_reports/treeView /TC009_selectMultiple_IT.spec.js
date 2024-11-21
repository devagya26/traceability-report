const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC009: Multiple selection - Issue Type", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.bug }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();
    await iframe.locator(selector.task).click();
    await iframe.getByRole(selector.button, { name: selector.issueT }).click();
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC009.json"));
});
