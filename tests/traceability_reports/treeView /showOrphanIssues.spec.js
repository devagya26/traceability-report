const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Show Orphan Issues", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await iframe.getByRole(selector.button, { name: selector.showOrphan }).click();
    await page.waitForTimeout(2000);
    await utils.exportCSV(page);
    await page.pause();
});
