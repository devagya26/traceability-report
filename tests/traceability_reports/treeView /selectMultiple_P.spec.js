const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Multiple - Priority", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.low).click();
    await iframe.locator(selector.medium).click();
    await iframe.locator(selector.high).click();
    await utils.exportCSV(page);
});
