
let passcode = "secret passcode";

class Employee {
    private _fullName: string;
private _fullName1: string;
    get fullName(): string {
      
        return this._fullName + "valid user";
    }
    get fullName1(): string {
      
        return this._fullName + "invalid user";
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
       
    }
     set fullName1(newName: string) {
        if (passcode && passcode == "secret passcode1") {
            this._fullName1 = newName;
        }
       
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
employee.fullName1 = "sreevani";
if (employee.fullName1) {
    console.log(employee.fullName1);
}