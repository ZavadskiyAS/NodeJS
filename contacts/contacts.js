const fs = require('fs');
const { promises: fsPromises } = fs;
const path = require('path');
const contactsPath = path.join(__dirname, '../db/contacts.json');
const uuid = require('uuid');

function getData(data) {
  return JSON.parse(data);
}
function saveData(data) {
  return JSON.stringify(data, null, 2);
}

async function listContacts() {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    return getData(data);
  } catch (err) {
    // throw err;
    next(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const findItem = list.find(item => item.id === contactId);
    return findItem;
  } catch (err) {
    // throw err;
    next(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const findContact = list.some(item => item.id === contactId);
    const newList = list.filter(item => item.id !== contactId);
    await fsPromises.writeFile(contactsPath, saveData(newList));
    return findContact;
  } catch (err) {
    // throw err;
    next(error);
  }
}

async function addContact({ name, email, phone }) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const newContact = {
      id: uuid.v4(),
      name,
      email,
      phone,
    };
    const newList = [...list, newContact];
    await fsPromises.writeFile(contactsPath, saveData(newList));
    return newContact;
  } catch (err) {
    // throw err;
    next(error);
  }
}

async function editContact(contactId, body) {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const list = getData(data);
    const findContactIdx = list.findIndex(item => item.id === contactId);
    if (findContactIdx === -1) {
      return false;
    } else {
      list[findContactIdx] = {
        ...list[findContactIdx],
        ...body,
      };
      await fsPromises.writeFile(contactsPath, saveData(list));
      return list[findContactIdx];
    }
  } catch (err) {
    // throw err;
    next(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  editContact,
};