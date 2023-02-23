const Employee = require("./Employee.js");

class Intern extends Employee {
    //same properties as employee
    constructor (name, id, email, github){
        super (name, id, email)
        this.school= school;}
    getSchool(){return this.school}
    getRole(){return 'Intern'} //overridden to intern
}