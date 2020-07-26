const Manager = require('../lib/Manager');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// make sure that manager object is properly extended from Employee
test('check properties and methods inherited from Employee', () => {
  const manager = new Manager('Donald Lewis', 1, 'donald@mail.com');

  expect(manager).toHaveProperty('name', expect.any(String));
  expect(manager).toHaveProperty('id', expect.any(Number));
  expect(manager).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

// make sure office number is added
test('check manager has office number', () => {
  const manager = new Manager('Donald Lewis', 1, 'donald@mail.com', 123);
  expect(manager).toHaveProperty('officeNumber', expect.any(Number));
})

// make sure that getOfficeNumber returns office number output string
test("outputs string with a manager's office number", () => {
	const manager = new Manager('Donald Lewis', 1, 'donald@mail.com', 123);
	expect(manager.getOfficeNumber()).toEqual(expect.stringContaining((manager.officeNumber).toString()));
});

test("manager's role overridden to Manager", () => {
  const manager = new Manager('Donald Lewis', 1, 'donald@mail.com', 123);
  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})