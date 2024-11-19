const { test } = require("@playwright/test");
const path = require("path");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-12: Save View", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.saveView).click();
    await iframe.getByRole(selector.textBox).fill('Filter1');
    await iframe.locator(selector.submit).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-12_saveView.json"));
})
