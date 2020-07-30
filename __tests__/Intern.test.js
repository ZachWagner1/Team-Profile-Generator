const Intern = require('../lib/Intern');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// make sure that intern object is properly extended from Employee
test('make sure properties and methods inherited from Employee', () => {
	const intern = new Intern('Donald Lewis', 1, 'donald@mail.com');

	expect(intern).toHaveProperty('name', expect.any(String));
	expect(intern).toHaveProperty('id', expect.any(Number));
	expect(intern).toHaveProperty('email', expect.stringMatching(emailRegEx));
});

// make sure that class has school property and value
test('make sure intern has a school name', () => {
	const intern = new Intern('Donald Lewis', 1, 'donald@mail.com', 'UT');

	expect(intern).toHaveProperty('school', expect.any(String));
});

// make sure that getSchool returns school name
test('gets a users school name', () => {
	const intern = new Intern('Donald Lewis', 1, 'donald@mail.com', 'UT');

	expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("intern's role overridden to Intern", () => {
	const intern = new Intern('Donald Lewis', 1, 'donald@mail.com', 123);

	expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});