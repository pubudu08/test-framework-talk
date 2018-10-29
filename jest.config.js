module.exports = {
  "testEnvironment": "node",
  "moduleDirectories": [
    "node_modules",
    "libs"
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "globals": {
    "ts-jest": {
      "enableTsDiagnostics": false,
      "skipBabel": true
    }
  },
  "testRegex": "(src|test)/.*\\.spec\\.ts$",
  "transform": {
    ".*\\.(ts)$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]
}
