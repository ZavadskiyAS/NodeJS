const fs = require('fs');
const { promises: fsPromises } = fs;
const path = require('path');

// const contactsPath = path.parse('/e/GoIT/NodeJS/NodeJS/db/contacts.json');
const contactsPath = path.join(__dirname, './db/contacts.json');
console.log('contactsPath :>> ', contactsPath);

// async function main() {
//     await fs.promises.readFile('contacts.json', 'utf-8');
//     const dirFails = await fs.promises.readdir('db');
//     console.log('dirFails :>> ', dirFails);
// }
// main()
function getData(data) {
    return JSON.parse(data);
  }

async function listContacts() {
    try {
      const data = await fsPromises.readFile(contactsPath, 'utf-8');
      console.table(getData(data));
    } catch (err) {
      throw err;
    }
  }

listContacts()
// =========================================
// fs.writeFileSync(+файл , текст в этом файле)
// fs.writeFile(+файл , текст в этом файле, (err) => {
    // if (err) throw new Error(err);
//     fs.readdir()
// })

// function listContacts() {
//    const listCont = fs.readFile(contactsPath, 'utf-8');
//     // const listCont = contactsPath.fs.readFile(contactsPath, 'utf-8');
//     console.log('listCont :>> ', listCont);
// }
// console.log('listContacts :>> ', listContacts);
  
// function getContactById(contactId) {
    
// }
  
// function removeContact(contactId) {
//     // ...твой код
// }
  
// function addContact(name, email, phone) {
//     // ...твой код
// }