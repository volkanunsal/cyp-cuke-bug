/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs-extra');
const path = require('path');
const parseCSV = require('./parseCSV');
const parseGherkin = require('./parseGherkin');
const testDownloadExists = require('./testDownloadExists');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    __dirname,
    '..',
    'config',
    `cypress.${file}.json`,
  );
  return fs.readJson(pathToConfigFile);
}

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = async (on, config) => {
  on('file:preprocessor', parseGherkin(config));
  on('task', { parseCSV, testDownloadExists });
  // Accept a configFile value or use development by default
  const file = config.env.configFile || 'prod';
  return getConfigurationByFile(file);
};
