const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC016.1: Select Maximum Options - Issue Card Fields ", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.cardSelectMax(page);
    await iframe.getByRole(selector.button, { name: selector.refresh }).click();
    await page.waitForTimeout(10000);
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC016.1.json"));
});

