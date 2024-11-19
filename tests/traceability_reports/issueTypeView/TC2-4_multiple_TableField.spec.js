const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-4: Multiple Selection", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.issueClearAll(page);
    await iframe.locator(selector.subtask).click();
    await iframe.locator(selector.story).click();
    await iframe.locator(selector.task).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-4_multiple.json"));
})
