const base = require("@ellioseven/config/jest")

module.exports = {
  ...base,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["<rootDir>/packages/**/*.{js,jsx,ts,tsx}"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>/packages/*"]
}
