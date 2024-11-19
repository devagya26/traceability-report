const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-24: Verify Help", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.documentation }).click();
    await page.pause();
})

