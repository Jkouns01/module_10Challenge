const Manager = require('lib/Manager')

// need an office number, test to see if that works, and chenge role to manager

//office number 
test('if you can add an office number',() => {
    const addON = 454
    const employeeAccount = new Manager (3, "charlie", 'codingcharlie@email.com', addON) // then
    expect(employeeAccount.getofficenumber()).toBe(addON);
})

//test to see is add ON works

// change the role 
test("Change the role to manager", () => 
{
    const jobType = "Manager"
    const employeeAccount = new Manager(3, "charlie", 'codingcharlie@email.com', 454)//then
    expect(employeeAccount.getRole()).toBe(jobType)
});