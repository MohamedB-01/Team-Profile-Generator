// using Employee constructor 
const Employee = require(`../lib/Employee`);

// creates employee object 
test(`creates an employee object`, () => {
    const employee = new Employee(`Mike`, 10, `mike@mike.com`);

    expect(employee.name).toEqual(`Mike`);
    expect(employee.id).toEqual(10);
    expect(employee.email).toEqual(`mike@mike.com`);
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee(`Mike`, 10, `mike@mike.com`);

    expect(employee.getName()).toEqual(`Mike`);
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee(`Mike`, 10, `mike@mike.com`);

    expect(employee.getId()).toEqual(10);
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee(`Mike`, 10, `mike@mike.com`);

    expect(employee.getEmail()).toEqual(`mike@mike.com`);
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee(`Mike`, 10, `mike@mike.com`);

    expect(employee.getRole()).toEqual(`Employee`);
});