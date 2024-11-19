const { test } = require("@playwright/test");
import { utils } from "../utils";
import { selector } from "../variables";

test("JQL Editor", async ({page}) => {
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByTitle(selector.linkTypeView).click();
    await utils.jql(page);
    await utils.exportAllCSV(page);
})
