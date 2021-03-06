module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "node_modules",
    ".cache",
    "cypress",
    ".next",
    "public",
    "static",
    "out"
  ]
}
