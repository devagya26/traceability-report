const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("TC2-7.1: Select More than 30 options - ICF", async ({page}) => {
    test.setTimeout(60000);
    await utils.login(page);
    await utils.filter(page);
    await utils.cardSelectMax(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.menuItem, { name: selector.reporter }).click();
    console.log("Could not click on element more than 30");
    await page.pause();
})
