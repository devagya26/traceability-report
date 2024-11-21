const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC016: Select Fix Versions - Issue Card Fields ", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.fixVersion }).click();
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC016.json"));
});
