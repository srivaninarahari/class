var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName + "valid user";
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName1", {
        get: function () {
            return this._fullName + "invalid user";
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode1") {
                this._fullName1 = newName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
employee.fullName1 = "sreevani";
if (employee.fullName1) {
    console.log(employee.fullName1);
}
