const base = require("@ellioseven/config/jest")
const packageName = require("./package.json").name

module.exports = {
  ...base,
  name: packageName,
  displayName: packageName,
  collectCoverageFrom : [
    "src/**/*.{js,jsx}",
  ],
  testMatch: ["**/*/*.test.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { rootMode: "upward" }]
  },
}
