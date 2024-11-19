const { test } = require("@playwright/test");
import { utils } from "../utils";

test("TC2-20: Exporting CSV, Current Page", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.exportCSV(page);
})

