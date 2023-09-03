//  ✅ Робота з JSON. ур. 2 Марченко
const {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await getAll();
      console.log("🌽Get All - Done 🪲 ", allContacts);
      break;
    case "getById":
      const getContact = await getById(id);
      console.log("test ", getContact);
      break;
    case "addContact":
      const newContact = await addContact({ name, email, phone });
      console.log("🐍 Add new contact", newContact);
      break;
    case "updateById":
      const updateContacts = await updateById(id, { name, email, phone });
      console.log("🐝 updateContacts: ", updateContacts);
      break;
    case "removeById":
      const deletedContacts = await removeById(id);
      break;
    default:
      console.log("Unknown action");
  }
};

// METHODS IN WORKS 👇

// invokeAction({ action: "getAll" });
// const testId = "002";
// invokeAction({ action: "getById", id: `${testId}` });

// invokeAction({
//   action: "addContact",
//   name: "Colta",
//   email: "Slara@kyliu,com",
//   phone: "78373 733 28 2",
// }); // запускається нескінчкений цикл!!!!

// invokeAction({
//   action: "updateById",
//   id: "002",
//   name: "🦁 Mycola",
//   email: "dgfjs@mdsgma.ckcv",
//   phone: "+ 367 67 6767",
// });

// invokeAction({ action: "removeById", id: "003" });
