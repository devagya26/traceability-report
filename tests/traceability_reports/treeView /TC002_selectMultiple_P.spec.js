const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC002: Select Multiple - Priority", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.low).click();
    await iframe.locator(selector.medium).click();
    await iframe.locator(selector.high).click();
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC002.json"));
});
