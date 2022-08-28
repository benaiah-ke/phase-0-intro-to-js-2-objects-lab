let employee = {name:'Praise', streetAddress:'Entomoto Drive'};

function updateEmployeeWithKeyAndValue (employee,key,value) {
    let employee1 = {...employee};
    employee1[key] = value;

    return employee1;
};
// console.log (updateEmployeeWithKeyAndValue(employee,'height',11));

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
};

// console.log (destructivelyUpdateEmployeeWithKeyAndValue(employee,'height',11));

function deleteFromEmployeeByKey(employee,key) {
    let employee2 = {...employee};
    delete employee2[key];
    
    return employee2;
};

// console.log (deleteFromEmployeeByKey(employee,'name'));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};