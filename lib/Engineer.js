const Employee = require("./Employee");
//has the same properties and methods as employee
class Engineer extends Employee{
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github
    }
    getgithub(){ return this.github}
    //overrides to Engineer instead of Employee
    getRole(){return "Engineer"; }
}
module.exports = Engineer