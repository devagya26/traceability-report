const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-18: Display No Changes", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.displayIssueCard }).click();
    await iframe.getByRole(selector.menuItem, { name: selector.displayIssueCard }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-18_noChangesIC.json"));
})

