// using Engineer constructor 
const Engineer = require(`../lib/Engineer`);


// creating  a GitHub username in engineer object  
test('creates a Github username in Engineer object', () => {
    const engineer = new Engineer (`Mike`, 10, `mike@mike.com`, `Mike@github`);
    
    expect(engineer.github) .toEqual(`Mike@github`);
});

// gets github username from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer(`Mike`, 10, `mike@mike.com`, `Mike@github`);

    expect(engineer.getGithub()).toEqual(`Mike@github`);
});



// gets role from getRole()
test('gets role of Engineer', () => {
    const engineer = new Engineer(`Mike`, 10, `mike@mike.com`, `Mike@github`);

    expect(engineer.getRole()).toEqual(`Engineer`);
});