const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";
const path = require("path");

test("TC2-6: Enable Description", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.button, { name: selector.issueCF }).click();
    await iframe.locator(selector.description).click();
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-6_description.json"));
})
