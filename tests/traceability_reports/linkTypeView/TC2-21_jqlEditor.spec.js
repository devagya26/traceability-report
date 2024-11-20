const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-21: JQL Editor", async ({page}) => {
    test.setTimeout(50000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.linkTypeView).click();
    await utils.jql(page);
    await page.waitForTimeout(7000);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-21.json"));
})
