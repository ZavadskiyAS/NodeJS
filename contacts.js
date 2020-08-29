const fs = require('fs');
const { promises: fsPromises } = fs;
const path = require('path');

// const contactsPath = path.parse('/e/GoIT/NodeJS/NodeJS/db/contacts.json');
const contactsPath = path.join(__dirname, './db/contacts.json');
// console.log('contactsPath :>> ', contactsPath);

// async function main() {
//     await fs.promises.readFile('contacts.json', 'utf-8');
//     const dirFails = await fs.promises.readdir('db');
//     console.log('dirFails :>> ', dirFails);
// }
// main()
function getData(data) {
    return JSON.parse(data);
}

// console.log('data :>> ', data);

async function listContacts() {
    try {
      const data = await fsPromises.readFile(contactsPath, 'utf-8');
    //   console.table(getData(data));
    } catch (err) {
      throw err;
    }
  }

listContacts()

async function getContactById(contactId) {
    try {
      const data = await fsPromises.readFile(contactsPath, 'utf-8');
      const listID = getData(data);
      const findItem = listID.find(item => item.id);
      // console.table(findItem);
    } catch (err) {
      throw err;
    }
  }
getContactById()

  
function removeContact(contactId) {
//     // ...твой код
}
  
function addContact(name, email, phone) {
//     // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};