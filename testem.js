/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    //  ember test --server --filter='unit' to run unit tests
    "PhantomJS",
    "Chrome",
    // "Mocha",
  ],
  "launchers": {
    "Mocha": {
      "command": "mocha tests/*_test.js"
    }
  }
};
