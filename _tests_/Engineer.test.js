const Engineer = require("lib/Engineer")

//needs everything from the employee as well as a GitHub UN, a getGithib() and the role switched to Engineer

// github UN test
test('github account',()=>{
    const hubTest= 'CharliePride__'
    const employeeAccount= new Engineer(3, 'charlie', 'codingcharlie@email.com', hubTest)//then
    expect(employeeAccount.hubTest()).toBe(hubTest)
})
