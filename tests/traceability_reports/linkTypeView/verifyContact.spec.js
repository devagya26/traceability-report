const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Verify Contact", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.linkTypeView).click();
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.contact }).click();
    await page.pause();
})

