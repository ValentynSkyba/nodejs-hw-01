import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const prevContacts = await readContacts();
  const contacts = Array(number).fill(0).map(createFakeContact);
  console.log(contacts);
  await writeContacts([...prevContacts, ...contacts]);
};

generateContacts(5);
