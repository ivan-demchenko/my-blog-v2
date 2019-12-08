const fs = require('fs');
const path = require('path');
const utils = require('util');

const { createClient } = require('contentful');

const Client = createClient({
  space: 'fq59fgvnc0ut',
  accessToken: 'w3ZmkM8A3xCnxyaRYCEGlCVPWMcZ68Bm-8mnKLmqdQY',
});

require('dotenv').config();

const types = ['blogPost'];

const writeFile = utils.promisify(fs.writeFile);

types
  .map(typeName => {
    console.log(`Working with ${typeName}`);
    return Client.getEntries({
      content_type: typeName,
    }).then(data => {
      const filePath = path.resolve(
        __dirname,
        '..',
        'data',
        `${typeName}.json`
      );
      console.log(`Received data for ${typeName}, writing to ${filePath}`);
      return writeFile(filePath, JSON.stringify(data, null, 2), {
        encoding: 'utf8',
      })
        .then(() => `Data fro ${typeName} has been saved`)
        .catch(e => `ERROR: ${typeName} could not be fetched ${e}`);
    });
  })
  .reduce((prev, cur) => {
    return prev.then(log => cur.then(msg => log + '\n' + msg));
  }, Promise.resolve(''));
