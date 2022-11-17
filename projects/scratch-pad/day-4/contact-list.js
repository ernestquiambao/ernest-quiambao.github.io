// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

/*
I:  takes values ex: (1, 'Max', 'Gaudin')
O:  returns an object named contact
C:  N/A
E:  N/A
*/
function makeContact(id, nameFirst, nameLast) { //  FACTORY FUNCTION like createUser in lecture
    let contact = {//  initialize object contact
        id: '',
        nameFirst: '',
        nameLast: '',
    }
    contact.id = id;//  adds key value pair id: value
    contact.nameFirst = nameFirst;//  adds key value pair nameFirst: value
    contact.nameLast = nameLast;//  adds key value pair nameLast: value
    return contact;//  returns object contact
} 


function makeContactList() {    //  FACTORY FUNCTION will return an object.  Imagine that there is a contact list array = data>contact.json
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact); //  takes contact object and adds it contacts list
        },
        findContact: function(fullName){    //  how do i take a fullName and interact with the data to see if matches
            for (var i = 0; i < contacts.length; i++){    //    loops over contacts array 
                if (fullName === (contacts[i].nameFirst + " " + contacts[i].nameLast)){//  tests if fullName is equal to firstName plus lastName joined with a space
                return contacts[i]; //  returns contact
                }
            }      
        },
        removeContact: function(contact){
            contacts.splice(contact, 1);
        },
        printAllContactNames: function(){
            let allNames = [];  //  initialize allNames
            for (var i = 0; i < contacts.length; i++){//  loops over contacts array
                allNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast);  //  pushes current fullname into allNames array
            }
            return allNames.join("\n"); //  returns allNames joined with new line
        }
    }    

}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
