const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-9: Multiple ICF", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.cardClearAll(page);
    const iframe = page.frame({
        url: selector.src
      }); 
    await iframe.locator(selector.assignee).click();
    await iframe.locator(selector.issueType).click();
    await iframe.locator(selector.description).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-9_multiple_ICF.json"));

})
