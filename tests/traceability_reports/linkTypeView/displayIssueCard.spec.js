const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Display Issue Card", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.displayIssueCard }).click();
})

