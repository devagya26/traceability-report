const { test } = require("@playwright/test");
import { utils } from "../utils";

test("Clear All - Priority", async ({page}) => {
    await utils.login(page);
    await utils.tvFilter(page);
    await utils.priorityClearAll(page);
    await utils.exportCSV(page);
});
