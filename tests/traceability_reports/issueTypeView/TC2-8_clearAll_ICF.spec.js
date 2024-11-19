const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-8: Clear All ICF", async ({page}) => {
    await utils.login(page);
    await utils.filter(page);
    await utils.cardClearAll(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-8_clearAll_ICF.json"));
})
