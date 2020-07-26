const Engineer = require('../lib/Engineer');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// make sure that engineer object is extended from Employee
test('make sure properties and methods inherited from Employee', () => {
	const engineer = new Engineer('Donald Lewis', 1, 'donald@mail.com');

	expect(engineer).toHaveProperty('name', expect.any(String));
	expect(engineer).toHaveProperty('id', expect.any(Number));
	expect(engineer).toHaveProperty('email', expect.stringMatching(emailRegEx));
});

// make sure that class has proper github username
test('make sure engineer has github name', () => {
	const engineer = new Engineer('Donald Lewis', 1, 'donald@mail.com', 'DL123');

	expect(engineer).toHaveProperty('github', expect.any(String));
});

// make sure that getGithub returns github username
test('get a users github name', () => {
	const engineer = new Engineer('Donald Lewis', 1, 'donald@mail.com', 'DL123');

	expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("Engineer's role overridden to Engineer", () => {
	const engineer = new Engineer('Donald Lewis', 1, 'donald@mail.com', 123);

	expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});