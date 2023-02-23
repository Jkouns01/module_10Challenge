const Employee = require("./Employee.js");
//returns the same thing plus 
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email)
    this.officeNumber= officeNumber
    }
    getofficeNumber(){return this.officeNumber}
     getRole(){ return 'Manager'}
} // overrides and returns Manager
