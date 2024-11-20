const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-13: Fetch Remote Links - CSV", async ({page}) => {
    test.setTimeout(80000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.fetchRemoteLinkType(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-13.json"));
})
