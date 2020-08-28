const { promises: fsPromises } = fs;
const path = require('path');

// const contactsPath = path.parse('/e/GoIT/NodeJS/NodeJS/db/contacts.json');
const contactsPath = path.join('./db/contacts.json');
console.log('contactsPath :>> ', contactsPath);

// fs.writeFileSync(+файл , текст в этом файле)
// fs.writeFile(+файл , текст в этом файле, (err) => {
    // if (err) throw new Error(err);
//     fs.readdir()
// })

function listContacts() {
    // ...твой код
}
  
function getContactById(contactId) {
    
}
  
function removeContact(contactId) {
    // ...твой код
}
  
function addContact(name, email, phone) {
    // ...твой код
}