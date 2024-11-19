const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-26: Verify Leave Feedback", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.feedback }).click();
    await page.pause();
})

