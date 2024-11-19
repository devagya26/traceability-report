const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-22: Exporting Markdown, Current Page", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.exportAsMarkdown(page);
})

