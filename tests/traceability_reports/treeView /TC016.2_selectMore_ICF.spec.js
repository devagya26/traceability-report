const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC016.1: Select Maximum Options - Issue Card Fields ", async ({page}) => {
    test.setTimeout(120000);
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.cardSelectMax(page);
    await iframe.getByRole(selector.menuItem, { name: selector.reporter }).click();
    console.log("Could not click on element more than 30");
    await page.pause();
});

