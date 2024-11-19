const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Updated Field - Save View", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await iframe.locator(selector.high).click();

    await utils.issueTypeClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.epicIT }).click();

    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.parentTV }).click();

    await utils.cardClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: selector.assigneeCF }).click();

    await iframe.getByTitle(selector.eye).click();
    await iframe.getByTitle(selector.update).click();
    await page.pause();
})
