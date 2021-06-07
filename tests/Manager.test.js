// using Manager constructor 
const Manager = require(`../lib/Manager`);


// creating Manager object  
test('creates an office number in Manager object', () => {
    const manager = new Manager (`Mike`, 10, `mike@mike.com`, 1);
    
    expect(manager.officeNumber) .toEqual(1);
});



// gets role from getRole()
test('gets role of Manager', () => {
    const manager = new Manager(`Mike`, 10, `mike@mike.com`, 1);

    expect(manager.getRole()).toEqual(`Manager`);
});