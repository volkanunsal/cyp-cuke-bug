const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');
const cucumber = require('cypress-cucumber-preprocessor').default;

/**
 * parseGherkin parses a gherkin file.
 *
 * @return {Promise<string>}
 */
module.exports = function parseGherkin({ projectRoot }) {
  return cucumber({
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: projectRoot }),
  });
};
