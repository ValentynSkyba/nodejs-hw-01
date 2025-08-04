import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const prevContacts = await readContacts();
  const newData = createFakeContact();
  //   console.log(newData);
  await writeContacts([...prevContacts, newData]);
};

addOneContact();
