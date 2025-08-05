import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const removeAllContacts = () => {
  writeContacts([]);
  console.log('All has been cleaned');
};

removeAllContacts();

const getAllContacts = () => readContacts();
console.log(await getAllContacts());
