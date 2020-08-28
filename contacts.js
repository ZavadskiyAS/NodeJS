const fs = require('fs');
const path = require('path');

// const contactsPath = path.parse('/e/GoIT/NodeJS/NodeJS/db/contacts.json');
const contactsPath = path.join(__dirname, './db/contacts.json');
console.log('contactsPath :>> ', contactsPath);


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