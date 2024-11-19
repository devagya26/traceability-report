const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-25: Verify Create Support", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.helpBar(page);
    await iframe.getByRole(selector.menu, { name: selector.ticket }).click();
    await page.pause();
})

