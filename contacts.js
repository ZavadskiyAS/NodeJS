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
  
  function saveData(data) {
    return JSON.stringify(data, null, 2);
  }
    
  // console.log('data :>> ', data);

async function listContacts() {
    try {
      const data = await fsPromises.readFile(contactsPath, 'utf-8');
      console.table(getData(data));
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
      console.table(findItem);
    } catch (err) {
      throw err;
    }
  }
getContactById()

async function removeContact(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const newList = list.filter(item => item.id !== contactId);
    console.table(newList);
    await fsPromises.writeFile(contactsPath, saveData(newList));
  } catch (err) {
    throw err;
  }
}
removeContact();

async function addContact(name, email, phone) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const newContact = {
      id: list.length + 1,
      name,
      email,
      phone,
    };
    const newList = [...list, newContact];
    await fsPromises.writeFile(contactsPath, saveData(newList));
    console.table(newList);
  } catch (err) {
    throw err;
  }
}
addContact();

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};