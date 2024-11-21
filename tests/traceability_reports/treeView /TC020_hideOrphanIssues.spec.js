const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC020: Hide Orphan Issues", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await iframe.getByRole(selector.button, { name: selector.showOrphan }).click();
    await page.waitForTimeout(2000);
    await iframe.getByRole(selector.button, { name: selector.hideOrphan }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC020.json"));
});
