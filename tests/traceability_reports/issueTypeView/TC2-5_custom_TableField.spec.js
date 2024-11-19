const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-5: Custom Field", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.issueClearAll(page);
    await iframe.locator(selector.customIssue).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-5_custom.json"));
})
