const Employee = require('../lib/Employee.js');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// makes sure that employee object instance is created and returns name, id, and email property with appropriate values
test('generates employee object instance', () => {
    const employee = new Employee('Donald Lewis', 1, 'donald@mail.com');
  
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringMatching(emailRegEx));
  });
  
  // makes sure that getName method returns correct 'name'value
  test("get an employee's name", () => {
    const employee = new Employee('Donald Lewis', 1, 'donald@mail.com');
    expect(employee.getName()).toEqual(expect.any(String));
  })
  
  // makes sure that getId method returns correct 'id' value
  test("get an employee's id", () => {
    const employee = new Employee('Donald Lewis', 1, 'donald@mail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
  })
  
  // makes sure that getEmail method returns correct value
  test("gets an employee's email", () => {
    const employee = new Employee('Donald Lewis', 1, 'donald@mail.com');
    expect(employee.getEmail()).toEqual(expect.stringMatching(emailRegEx));
  })
  
  // makes sure that getRole method returns 'Employee'
  test("gets an employee's name", () => {
    const employee = new Employee('Donald Lewis', 1, 'donald@mail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  })