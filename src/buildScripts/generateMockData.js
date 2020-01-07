/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';
import { schema } from './mockDataSchema';


jsf.extend('faker', () => faker);

// const json = JSON.stringify(jsf(schema));

jsf.resolve(schema).then((result) => {
  fs.writeFile('./src/api/db.json', JSON.stringify(result, null, 2), (err) => {
    if (err) {
      return console.log(chalk.red(err));
    }
    console.log(chalk.green('Mock Data Generated Here'));
  });
});
