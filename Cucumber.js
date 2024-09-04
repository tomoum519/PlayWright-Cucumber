
module.exports = {
    default: {
        "require": [
            "src/StepDefinitions/*.ts",
            "src/Support/Hooks.ts"
        ],
        "format":
        [
            "progress-bar",
            ["json", "src/Report/Cucumber-Reporter.json"]
        ],
        "retry": 0,
        requireModule: ['ts-node/register']
    },
};