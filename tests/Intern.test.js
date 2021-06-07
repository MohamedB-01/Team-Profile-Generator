// using Intern constructor 
const Intern = require(`../lib/Intern`);


// adds school to intern object  
test('creates a school in Intern object', () => {
    const intern = new Intern (`Mike`, 10, `mike@mike.com`, `UW`);
    
    expect(intern.school) .toEqual(`UW`);
});

// gets school from getSchool()
test('gets intern school value', () => {
    const intern = new Intern(`Mike`, 10, `mike@mike.com`, `UW`);

    expect(intern.getSchool()).toEqual(`UW`);
});



// gets role from getRole()
test('gets role of Intern', () => {
    const intern = new Intern(`Mike`, 10, `mike@mike.com`, `UW`);

    expect(intern.getRole()).toEqual(`Intern`);
});