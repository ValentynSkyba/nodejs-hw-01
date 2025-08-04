import { log } from 'node:console';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import detect from 'detect-file-encoding-and-language';

export const readContacts = async () => {
  const { encoding } = await detect(PATH_DB);
  //   console.log(fileData);

  //   const data = await fs.readFile(PATH_DB, 'utf-8');
  //  npm install detect-file-encoding-and-language

  const data = await fs.readFile(PATH_DB, encoding);
  //   console.log(data);
  return JSON.parse(data);
};
