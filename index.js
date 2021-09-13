// Write your solution in this file!
const employee = {
    name: "Adam Lenter",
    streetAddress: "55 Bar Beach Rd."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log(employee)
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
}