const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-6: Custom Fields", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.issueClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.inward }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.outward }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-6.json"));
})
