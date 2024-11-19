const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-21: Exporting CSV, All Pages", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.exportAllCSV(page);
})

