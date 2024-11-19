const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Exporting CSV, All Pages", async ({page}) => {
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.exportAllCSV(page);
})

