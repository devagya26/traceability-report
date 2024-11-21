const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC029: Page Size", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await iframe.getByRole(selector.button, {name: selector.pageSize}).click()
    await iframe.getByRole(selector.menu, { name: '10', exact: true }).click();
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC029.json"));
})

