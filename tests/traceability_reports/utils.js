import { selector } from "./variables";
const csvtojson = require("csvtojson");
const fs = require("fs").promises;
const path = require("path");
require('dotenv').config();

export const utils = {
    async login(page) {
        await page.goto(process.env.LOGIN_URL || "");
        await page.getByPlaceholder(selector.usernameInput).fill(process.env.JIRA_USERNAME || "");
        await page.getByPlaceholder(selector.usernameInput).press("Enter");
        await page.locator(selector.passwordInput).fill(process.env.JIRA_PASSWORD || "");
        await page.locator(selector.passwordInput).press("Enter");
        await page.waitForTimeout(20000);
    },

    async filter(page) {
      const iframe = page.frame({
          url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.selectFilter }).click();
      await iframe.getByRole(selector.menu, { name: selector.tpBoard }).click();
      await page.waitForTimeout(8000);
    },

    async tpFilter(page) {
        const iframe = page.frame({
            url: selector.src
        }); 
        await iframe.getByTitle(selector.linkTypeView).click();
        await iframe.getByRole(selector.button, { name: selector.selectFilter }).click();
        await iframe.getByRole(selector.menu, { name: selector.tpBoard }).click();
        await page.waitForTimeout(5000);
    },

    async tvFilter(page) {
        const iframe = page.frame({
            url: selector.src
        }); 
        await iframe.getByTitle(selector.treeView).click();
        await iframe.getByRole(selector.button, { name: selector.selectFilter }).click();
        await iframe.getByRole(selector.menu, { name: selector.tpBoard }).click();
        await page.waitForTimeout(3000);
    },

    async fetchRemoteLinkType(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByLabel('page 2').click();
      await iframe.locator(selector.setting).click();
      await iframe.getByRole(selector.menuItem, { name: selector.fetchRemote }).click();
      await page.waitForTimeout(18000);
      // await iframe.getByRole(selector.button, { name: selector.tableFields }).click();
      // await iframe.getByRole(selector.menuItem, { name: 'Outward' }).click();
    },

    async fetchRemoteTreeView(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByLabel('page 2').click();
      await iframe.locator(selector.setting).click();
      await iframe.getByRole(selector.menuItem, { name: selector.fetchRemote }).click();
      await page.waitForTimeout(20000);
      // await iframe.getByRole(selector.button, { name: selector.issueLT }).click();
      await iframe.getByLabel(selector.expandButton, { exact: true }).click();
      await page.waitForTimeout(25000);
    },

    async fetchRemoteDisabled(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByLabel('page 2').click();
      await page.waitForTimeout(3000);
      await iframe.getByLabel(selector.expandButton, { exact: true }).click();
      await page.waitForTimeout(8000);
    },

    async expand(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByLabel(selector.expandButton, { exact: true }).click();
      await page.waitForTimeout(10000);
    },

    async helpBar(page) {
        const iframe = page.frame({
          url: selector.src
        }); 
        await iframe.getByRole(selector.button, { name: selector.help }).click();
    },

    async jql(page){
        const iframe = page.frame({
          url: selector.src
        }); 
        await iframe.getByRole(selector.button, { name: selector.jql }).click();
        await page.waitForTimeout(4000);
        await page.frameLocator(selector.jqlFrameId).getByLabel(selector.jqlLabel).click();
        await page.frameLocator(selector.jqlFrameId).getByLabel(selector.jqlLabel).fill('IssueType=Bug');
        await page.frameLocator(selector.jqlFrameId).getByRole(selector.button, { name: selector.search }).click();
        await page.getByRole(selector.button, { name: selector.filter }).click();
        await page.waitForTimeout(3000);
    },

    async issueClearAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.tableFields }).click();
      await iframe.getByRole(selector.button, { name: selector.clearAll }).click();
    },

    async issueSelectAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.tableFields }).click();
      await iframe.getByRole(selector.button, { name: selector.selectAll }).click();
    },

    async cardClearAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueCF }).click();
      await iframe.getByRole(selector.button, { name: selector.clearAll }).click();
    },

    async cardSelectAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueCF }).click();
      await iframe.getByRole(selector.button, { name: selector.selectAll }).click();
    },

    async priorityClearAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.priority }).click();
      await iframe.getByRole(selector.button, { name: selector.clearAll }).click();
    },

    async prioritySelectAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.priority }).click();
      await iframe.getByRole(selector.button, { name: selector.selectAll }).click();
    },

    async issueLinkClearAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueLT }).click();
      await iframe.getByRole(selector.button, { name: selector.clearAll }).click();
    },

    async issueLinkSelectAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueLT }).click();
      await iframe.getByRole(selector.button, { name: selector.selectAll }).click();
    },

    async issueTypeClearAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueT }).click();
      await iframe.getByRole(selector.button, { name: selector.clearAll }).click();
    },

    async issueTypeSelectAll(page){
      const iframe = page.frame({
        url: selector.src
      }); 
      await iframe.getByRole(selector.button, { name: selector.issueT }).click();
      await iframe.getByRole(selector.button, { name: selector.selectAll }).click();
    },

    async download(page){
        const iframe = page.frame({
            url: selector.src
        });
        await iframe.getByTitle("Click here to export file").click();
        const downloadPromise = page.waitForEvent("download");
        await iframe.getByLabel("CSV").getByRole("menuitem", { name: "Export the current page" }).click();
        const download = await downloadPromise;
        await download.saveAs((path.resolve(__dirname, "../../tp_result")));
    },

    async exportCSV(page){
      const iframe = page.frame({
          url: selector.src
      });
      await iframe.getByTitle("Click here to export file").click();
      const downloadPromise = page.waitForEvent("download");
      await iframe.getByLabel("CSV").getByRole("menuitem", { name: "Export the current page" }).click();
      const download = await downloadPromise;
      await download.saveAs((path.resolve(__dirname, "../../currentPage_CSV")));
    },

    async exportAllCSV(page){
      const iframe = page.frame({
          url: selector.src
      });
      await iframe.getByTitle("Click here to export file").click();
      const downloadPromise = page.waitForEvent("download");
      await iframe.getByLabel("CSV").getByRole("menuitem", { name: "Export all records" }).click();
      const download = await downloadPromise;
      await download.saveAs((path.resolve(__dirname, "../../All_CSV")));
    },

    async exportAsMarkdown(page){
      const iframe = page.frame({
          url: selector.src
      });
      await iframe.getByTitle("Click here to export file").click();
      const downloadPromise = page.waitForEvent("download");
      await iframe.getByLabel("Markdown").getByRole("menuitem", { name: "Export the current page" }).click();
      const download = await downloadPromise;
      await download.saveAs((path.resolve(__dirname, "../../Current_Markdown")));
    },

    async exportAllMarkdown(page){
      const iframe = page.frame({
          url: selector.src
      });
      await iframe.getByTitle("Click here to export file").click();
      const downloadPromise = page.waitForEvent("download");
      await iframe.getByLabel("Markdown").getByRole("menuitem", { name: "Export all records" }).click();
      const download = await downloadPromise;
      await download.saveAs((path.resolve(__dirname, "../../All_Markdown")));
    },

    async convertAndCompare(anotherJsonFilePath) {
      const csvFilePath = path.resolve(__dirname, "../../tp_result");
        try {
          // Convert CSV file to JSON and store in memory
          const jsonInMemory = await csvtojson().fromFile(csvFilePath);
          console.log("CSV data in memory:", jsonInMemory);
      
          // Read another JSON file from disk asynchronously
          const anotherJsonContent = await fs.readFile(anotherJsonFilePath, "utf-8");
          const anotherJson = JSON.parse(anotherJsonContent);
      
          // Compare the two JSON objects
          const areEqual = JSON.stringify(jsonInMemory) === JSON.stringify(anotherJson);
          
          if (areEqual) {
            console.log("The JSON data in memory matches the file content.");
          } else {
            console.log("The JSON data in memory doesn't match the file content.");
          }
        } catch (err) {
          console.error("Error:", err);
        }
    },

    async convertAndCompareAllCSV(anotherJsonFilePath) {
      const csvFilePath = path.resolve(__dirname, "../../All_CSV");
        try {
          // Convert CSV file to JSON and store in memory
          const jsonInMemory = await csvtojson().fromFile(csvFilePath);
          console.log("CSV data in memory:", jsonInMemory);
      
          // Read another JSON file from disk asynchronously
          const anotherJsonContent = await fs.readFile(anotherJsonFilePath, "utf-8");
          const anotherJson = JSON.parse(anotherJsonContent);
      
          // Compare the two JSON objects
          const areEqual = JSON.stringify(jsonInMemory) === JSON.stringify(anotherJson);
          
          if (areEqual) {
            console.log("The JSON data in memory matches the file content.");
          } else {
            console.log("The JSON data in memory doesn't match the file content.");
          }
        } catch (err) {
          console.error("Error:", err);
        }
    }      
}