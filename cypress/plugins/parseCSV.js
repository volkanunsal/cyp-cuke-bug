const parse = require('csv-parse/lib/sync');

/**
 * parseCSV parses a csv file.
 *
 * @return {Promise<Record<string, string>[]>}
 */
module.exports = function parseCSV({ filePath }) {
  return new Promise((resolve, reject) => {
    try {
      const jsonData = parse(fs.readFileSync(filePath), {
        columns: true,
        skip_empty_lines: true,
      });
      resolve(jsonData);
    } catch (e) {
      reject(e);
    }
  });
};
