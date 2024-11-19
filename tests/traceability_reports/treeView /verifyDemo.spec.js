const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Verify Demo", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.treeView).click();
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.bookDemo }).click();
    await page.pause();
})

