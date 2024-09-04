const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "src/Report",
  reportPath: "./",
  metadata: {
    browser: {
      name: "chrome"
    },
    device: "Test Machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: `Run Info ${Date()}`
  },
});

