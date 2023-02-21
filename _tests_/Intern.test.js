const Intern = require('./lib/Intern')

// need to test and see if you can add a school name, a getschool() test and change the name from employee to intern

// what school test
test("can you add a school", () => {
    const addSchool = 'School'
    const employeeAccount = new Intern(3, "charlie", 'codingcharlie@email.com', addSchool) // then
    expect(employeeAccount.school).toBe(addSchool)
})

//getschool() 
test('will addSchool work', ()=> {

})

// replace employee with 'intern'
test('replace employee with intern', () => {
        const jobType= "Intern"
        const employeeAccount= new Employee(3, "charlie", 'codingcharlie@email.com', addSchool) // then
        expect(employeeAccount.jobType()).toBe(jobType)
    })
