//  ✅ Робота з JSON. ур. 2 Марченко
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};
const addContact = async ({ name, email, phone }) => {
  const contacts = await getAll();
  console.log("All contacts: ", contacts);

  const newContact = {
    id: nanoid(5),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};
const updateById = async (id, { name, email, phone }) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) return null;

  contacts[index] = { id, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};
const removeById = async (id) => {
  const contacts = await getAll();
  const newContacts = contacts.filter((item) => item.id !== id);

  if (contacts.length === newContacts.length) {
    return console.log("❌ Not found contact!");
  }
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return console.log("✅ Contact deleted!");
};

module.exports = {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
};
