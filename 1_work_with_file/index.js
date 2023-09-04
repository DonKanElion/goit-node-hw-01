// ✅ 1. Робота з файлами ур. 2 Марченко
const fs = require("fs/promises");

const contactsPath = './db/contacts.json';

const contactsOperation = async ({ action }) => {
  switch (action) {
    case "read":
      // const result = await (await fs.readFile(contactsPath)).toString('utf-8');
      // or
      const result = await fs.readFile(contactsPath, "utf-8");
      console.log(result);
      break;

    case "write":
      const append = await fs.appendFile(contactsPath, "\n Hello MFK");
      console.log(append, "Added!");
      break;
    case "replace":
      const replace = await fs.writeFile(contactsPath, "New text");
      console.log(replace, "Replace file - Done!");
      break;
    case "delete":
      const deleted = await fs.unlink(contactsPath);
      console.log(deleted, "Delete file - Dona!");
    default:
      console.log("Unknown operation 🍓");
      break;
  }
};

contactsOperation({ action: "read" });
// contactsOperation( {action: 'write'})
// contactsOperation({ action: "replace" });
// contactsOperation( { action: 'delete'})
