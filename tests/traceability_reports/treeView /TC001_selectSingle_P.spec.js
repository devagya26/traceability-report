const { test } = require("@playwright/test");
import { convert } from "../../../csv-to-json";
import { utils } from "../utils";
import { selector } from "../variables";

test("TC001: Select High - Priority", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();
    await utils.fetchRemoteEnabled(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/treeView/TC001.json"));
});
