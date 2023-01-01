const IS_ABSENT = 0;
    let empCheck =  Math.floor(Math.random() * 10) %  2;

    if (empCheck == 0) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NO_OF_WORKING_DAYS = 20;


function getWorkingHrs(empCheck) {
switch(empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;    
}
}

function CalcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}


let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs
    empDailyWageArr.push(CalcDailyWage(empHrs));
}

let empWage = CalcDailyWage(totalEmpHrs);
  
console.log("Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp Wage : " + empWage);



let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A "+ empDailyWageArr.reduce(totalWages, 0));


let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWagrArr = empDailyWageArr.map(mapDayWithWage);
console.log("B:--Daily Wage Map");
console.log(mapDayWithWagrArr);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWagrArr.filter(fullTimeWage);
console.log("C:-- Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);


function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("D:-- First time Fulltime wage was earned on Day :- " + mapDayWithWagrArr.find(findFullTimeWage));


function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("E:-- Check all element have full time wage :- " + fullDayWageArr.every(isAllFullTimeWage));


function isAllPartTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("F:-- Check if any part time wage : " + mapDayWithWagrArr.some(isAllPartTimeWage));


function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0)
    return numOfDays+1;
    return numOfDays;
}
console.log("G:-- - Number of days emp worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));
