const { test } = require("@playwright/test");
const path = require("path");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-17: Display No Changes", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.setting).click();
    await iframe.getByRole(selector.menuItem, { name: selector.displayIssueCard }).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-17_issueCard.json"));
})

