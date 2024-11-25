const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-14.1: Switch Page", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.filter(page);
    await iframe.getByLabel('page 2').click();
    await page.waitForTimeout(5000);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-14.1_switchPage.json"));
})
