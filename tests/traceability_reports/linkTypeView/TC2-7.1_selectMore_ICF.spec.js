const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-7.1: Select More than 30 Options - Issue Card Fields", async ({page}) => {
    test.setTimeout(70000);
    await utils.login(page);
    await utils.tpFilter(page);
    await page.waitForTimeout(4000)
    await utils.cardSelectMax(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.menuItem, { name: selector.reporter }).click();
    console.log("Could not click on element more than 30");
    await page.pause();
})
