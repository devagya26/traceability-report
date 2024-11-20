const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("Exporting CSV, Current Page", async ({page}) => {
    test.setTimeout(40000);
    await utils.login(page);
    await utils.tpFilter(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/linkType/TC2-26.json"));
})

