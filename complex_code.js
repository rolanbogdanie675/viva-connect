/**
 * Filename: complex_code.js
 * 
 * This file contains a sophisticated, elaborate, and complex JavaScript code.
 * It showcases a contact management system with multiple features.
 */

// Define Contact class
class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getFormattedContact() {
    return `
      Name: ${this.getFullName()}
      Phone: ${this.phone}
      Email: ${this.email}
    `;
  }
}

// Define ContactManager class
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
    console.log(`Contact '${contact.getFullName()}' added successfully.`);
  }

  removeContact(contact) {
    const index = this.contacts.findIndex((c) => c.getFullName() === contact.getFullName());
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact '${contact.getFullName()}' removed successfully.`);
    } else {
      console.log(`Contact '${contact.getFullName()}' not found.`);
    }
  }

  searchContacts(query) {
    query = query.toLowerCase();
    const results = this.contacts.filter((contact) => {
      const fullName = contact.getFullName().toLowerCase();
      return fullName.includes(query) || contact.phone.includes(query) || contact.email.includes(query);
    });

    if (results.length > 0) {
      console.log(`Search results (${results.length}):`);
      results.forEach((result) => console.log(result.getFormattedContact()));
    } else {
      console.log('No contacts found matching the search query.');
    }
  }

  listContacts() {
    console.log(`Contact List (${this.contacts.length} Contacts):`);
    this.contacts.forEach((contact) => console.log(contact.getFormattedContact()));
  }
}

// Usage example
const cm = new ContactManager();

const contact1 = new Contact('John', 'Doe', '1234567890', 'john.doe@example.com');
const contact2 = new Contact('Jane', 'Smith', '9876543210', 'jane.smith@example.com');

cm.addContact(contact1); // Contact 'John Doe' added successfully.
cm.addContact(contact2); // Contact 'Jane Smith' added successfully.

cm.listContacts();
/*
Contact List (2 Contacts):
Name: John Doe
Phone: 1234567890
Email: john.doe@example.com

Name: Jane Smith
Phone: 9876543210
Email: jane.smith@example.com
*/

cm.searchContacts('john');
/*
Search results (1):
Name: John Doe
Phone: 1234567890
Email: john.doe@example.com
*/

cm.removeContact(contact2); // Contact 'Jane Smith' removed successfully.
cm.listContacts();
/*
Contact List (1 Contacts):
Name: John Doe
Phone: 1234567890
Email: john.doe@example.com
*/
