const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("Select Single - Issue Link Type ", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await utils.tvFilter(page);
    await utils.issueLinkClearAll(page);
    await iframe.getByRole(selector.menuItem, { name: 'Parent' }).click();
    await utils.exportCSV(page);
});
