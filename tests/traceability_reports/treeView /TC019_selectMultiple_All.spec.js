const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC019: Select Multiple - Priority, Issue Type, Issue Link Type & Issue Card Fields", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);

    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();

    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.assigneeCF }).click();
    
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC019.json"));
});
