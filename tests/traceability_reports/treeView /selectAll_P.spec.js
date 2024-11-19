const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Select All - Priority", async ({page}) => {
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.prioritySelectAll(page);
    await utils.exportCSV(page);
});
