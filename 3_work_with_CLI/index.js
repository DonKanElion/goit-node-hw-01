//  ✅ 3. Робота з CLI. ур. 2 Марченко

// const yargs = require("yargs"); // var. 2 yarn
// const { hideBin } = require("yargs/helpers"); // var. 2 yarn

const { program } = require("commander"); // var. 3 Commander

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

// 2. METHODS IN WORKS in VS Code👇

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "001" });

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

// ⛳️ 3. WORK FROM -  CLI. var. 1

// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

//  node index.js --action getAll  - і т.д.

// 🧘 3. WORK FROM -  CLI. var. 2 yargs (підключили зверху 3,4 рядок )

// const arr = hideBin(process.argv);
// console.log(arr);
// req: node index.js --action getAll
// resp: [ '--action', 'getAll' ]

// const { argv } = yargs(arr); // ствоює ключ-значення
// console.log(argv)
// resp: { _: [], action: 'getAll', '$0': 'index.js' }  - * запит той самий.

// invokeAction(argv);

// req:  node index.js --action getById --id 001  // не забуваємо про флаги!!!
// resp:
// {
//   id: '001',
//   name: '3 work with CLI',
//   email: 'nulla.ante@vestibul.co.uk',
//   phone: '(992) 914-3792'
// }

// 🥇 3. WORK FROM -  CLI. var. 3 Commander

program //  створюємо опції
  .option("-a, --action <type>") // -a - скорочення, type - чекає значення !
  .option("-i, --id <type>") // без type - commender сприймає значення як boolean(t/f)
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv); //  commander -  розпарси рядок який я передам
const options = program.opts(); // створи зпит
console.log(options);
// req: node index.js --action getById --id 001
//resp: { action: 'getById', id: '001' }

invokeAction(options); // Поверни дані. 
// resp:
// {
//   id: '001',
//   name: '3 work with CLI',
//   email: 'nulla.ante@vestibul.co.uk',
//   phone: '(992) 914-3792'
// }

// ======== END ===========