const fs = require('fs');

/**
 * testDownloadExists tests if a downloaded file exists in the downloads folder.
 *
 * @return {Promise<boolean>}
 */
module.exports = async function testDownloadExists({ name }) {
  return new Promise((res) => {
    const testFolder = '~/Downloads';
    fs.readdir(testFolder, (_, files) => {
      files.forEach((file) => {
        if (new RegExp(name).test(file)) res(true);
      });
      res(false);
    });
  });
};
