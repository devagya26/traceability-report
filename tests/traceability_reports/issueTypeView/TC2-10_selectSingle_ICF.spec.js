const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-10: Select Single", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    await utils.cardClearAll(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.assignee).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-10_selectSingle_ICF.json"));
})

