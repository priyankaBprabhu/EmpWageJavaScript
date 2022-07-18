console.log("Employee Wage Computation")
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT) {
    console.log("emp is absent");
    return;
}else {
    console.log("emp is present");
}