const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Exporting CSV, Current Page", async ({page}) => {
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.exportCSV(page);
})


