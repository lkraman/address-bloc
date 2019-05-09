<<<<<<< HEAD
const inquirer = require("inquirer");
=======

>>>>>>> adress-bloc-menu-controller-assignment
const Contact = require("../db/models").Contact;

module.exports = class ContactController {

  constructor(){
    this.contacts = [];
    this.addContactQuestions = [
       {
         type: "input",
         name: "name",
         message: "Contact's name - ",
         validate(val){
           return val !== "";
         }
       },
       {
         type: "input",
         name: "phone",
         message: "Contact's phone number - ",
         validate(val){
           return val !== "";
         }
       },
       {
         type: "input",
         name: "email",
         message: "Contact's email - ",
         validate(val){
           return val !== "";
         }
       }
     ];
   }

   addContact(name, phone, email){
     return Contact.create({name, phone, email})
   }

<<<<<<< HEAD
=======
   getContacts(){
    return Contact.findAll()
  }

>>>>>>> adress-bloc-menu-controller-assignment
}
