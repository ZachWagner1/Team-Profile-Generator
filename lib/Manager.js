  
const Employee = require('./Employee');
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return `Office number: ${this.officeNumber}`;
  }

  getRole() {
    return `<i class="fas fa-mug-hot mr-2 role-icon"></i>Manager`;
  }
}
module.exports = Manager;