const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Exporting Markdown, All Pages", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.exportAllMarkdown(page);
})

