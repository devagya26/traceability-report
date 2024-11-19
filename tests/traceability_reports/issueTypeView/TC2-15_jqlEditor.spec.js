const { test } = require("@playwright/test");
import { utils } from "../utils";
const path = require("path");

test("TC2-15: JQL Editor", async ({page}) => {
    await utils.login(page);
    await utils.jql(page);
    await utils.download(page);
    await utils.convertAndCompare(path.resolve(__dirname, "../../../expectedTraceability/issueType/TC2-15_jqlEditor.json"));
})
