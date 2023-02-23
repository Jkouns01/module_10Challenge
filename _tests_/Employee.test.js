const Employee = require('../lib/Employee');
//can it creat a new employee
//requirements include a personal id number, name, type of employee,  and contact info
// does each part of the employee tab work?

//Employee tab test
test("Can it create a new empoyee tab?", () => {
    const employeeAccount = new Employee()
    expect(typeof(employeeAccount)).toBe('object')
})
//name test
test("Name Test", () => {
    const name = 'Charlie'
    const employeeAccount= new Employee(name) //then
    expect(employeeAccount.name).toBe(name);
})

//id test
test("Id Test", () =>{
    const id = 3
    const employeeAccount = new Employee(3, 'Charlie') //then
    expect(employeeAccount.id).toBe(id)
})

//employment type
test("employement testing", () =>
{
    const jobType= "Standard"
    const employeeAccount= new Employee(3, "charlie", "Standard") // then
    expect(employeeAccount.jobType()).toBe(jobType)
})

//contact info
test("employee contact info",() =>
{
    const email = 'codingcharlie@email.com'
    const employeeAccount= new Employee(3, "charlie", 'codingcharlie@email.com') //then
    expect(employeeAccount.email).toBe(email)
})

//getName test

//getId test

//getEmail test
