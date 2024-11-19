const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-28: Verify Visit Website", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.visitWebsite }).click();
    await page.pause();
})

