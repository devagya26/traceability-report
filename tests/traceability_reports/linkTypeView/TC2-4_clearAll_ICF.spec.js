const { test } = require("@playwright/test");
import { utils } from "../utils"
const path = require("path");

test("TC2-4: Clear All - Issue Card Fields", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.cardClearAll(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-4.json"));
})
