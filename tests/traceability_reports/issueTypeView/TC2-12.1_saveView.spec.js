const { test } = require("@playwright/test");
const path = require("path");
import { convert } from "../../../csv-to-json";
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-12.1: Save View - New Filter Name", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.saveView).click();
    await iframe.getByRole(selector.textBox).fill('Save View 1');
    await iframe.locator(selector.submit).click();
    await utils.download(page);
    convert()
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-12.1_saveView.json"));
})
