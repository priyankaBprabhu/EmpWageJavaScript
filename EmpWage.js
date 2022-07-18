console.log("Employee Wage Computation")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOUR_IN_MONTH = 100;
let totalEmpHour = 0;
let totalWorkingDays = 0;
const IS_ABSENT = 0;
let empDailyWageArr = new Array();
function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME :
            return PART_TIME_HOUR;
            break;
         case IS_FULL_TIME :
            return FULL_TIME_HOUR;
            break;
        default :
            return 0;
    }
}
function dailyWage(empHours) {
    return empHours * WAGE_PER_HOUR;
}
while(totalEmpHour <= MAX_HOUR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHour = getWorkingHours(empCheck);
    totalEmpHour = totalEmpHour + empHour;
    empDailyWageArr.push(dailyWage(empHour));
}
let empWage = dailyWage(totalEmpHour);
console.log("Total hour " + totalEmpHour + " total working day " + totalWorkingDays + " emp wage is " + empWage);
console.log(empDailyWageArr);