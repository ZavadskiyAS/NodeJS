const { Router } = require('express');
const ContactsController = require('./contacts.controller');
const contactsRouter = Router();
contactsRouter.get('/', ContactsController.getContacts);
contactsRouter.get('/:contactId', ContactsController.getContactById);
contactsRouter.post(
  '/',
  ContactsController.validateCreateContact,
  ContactsController.createContact,
);
contactsRouter.delete('/:contactId', ContactsController.deliteContact);
contactsRouter.patch(
  '/:contactId',
  ContactsController.validateUpdateContact,
  ContactsController.updateContact,
);

module.exports = contactsRouter;