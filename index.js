// Your code here


// =========================================== //
let array = ["Gray", "Worm", "Security", 1];
function createEmployeeRecord(array){

    let timeInEvents = [];
    let timeOutEvents = [];

    let eRecord = {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': timeInEvents,
        'timeOutEvents': timeOutEvents
    }

    return eRecord;
}
// =========================================== //



// =========================================== //
// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ];

function createEmployeeRecords(twoRows){

    let employeeRecords = twoRows.map(createEmployeeRecord)
    return employeeRecords;
}
// console.log(createEmployeeRecords(twoRows));
// =========================================== //



// =========================================== //
//let eRecord = createEmployeeRecords(twoRows)[0];
//let dateStamp = "2014-02-28 1400"

function createTimeInEvent(eRecord, dateStamp){

    let TimeIn = {
        type: "TimeIn",
        hour: Number(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    // Add to timeInEvents of eRecord
    eRecord.timeInEvents.push(TimeIn);
    return eRecord
}
//createTimeInEvent(eRecord, dateStamp);
// =========================================== //



// =========================================== //
function createTimeOutEvent(eRecord, dateStamp){

    let TimeOut = {
        type: "TimeOut",
        hour: Number(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    // Add to timeInEvents of eRecord
    eRecord.timeOutEvents.push(TimeOut);
    return eRecord
}


// =========================================== //
// eRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// updatedBpRecord = createTimeInEvent(eRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(eRecord, "0044-03-15 1100")

function hoursWorkedOnDate(eRecord, dateStampDay){

    // locate Date in record. TimeIn and TimeOut hours
    const objWithdateStampDayTOut = eRecord.timeOutEvents.find(obj => obj.date === dateStampDay);
    const objWithdateStampDayTIn = eRecord.timeInEvents.find(obj => obj.date === dateStampDay);
    let hoursWorked = objWithdateStampDayTOut.hour - objWithdateStampDayTIn.hour
    return parseInt((hoursWorked/100).toFixed(2));    

}
// console.log(hoursWorkedOnDate(eRecord, "0044-03-15"))
// =========================================== //



// =========================================== //
function wagesEarnedOnDate(eRecord, dateStampDay){

    let wagesEarned;
    wagesEarned = hoursWorkedOnDate(eRecord, dateStampDay) * eRecord.payPerHour;
    return wagesEarned;

}
// =========================================== //



// =========================================== //
//cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
//updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
//updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// Earns 54
//updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
//updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// 324 + 54

function allWagesFor(eRecord){

    // Accumulate all dateStampDay
    let accumWages = 0;
    for (let i=0; i < eRecord.timeInEvents.length; i++){

        let hoursWorked = eRecord.timeOutEvents[i].hour - eRecord.timeInEvents[i].hour;
        let wagesEarned = (hoursWorked/100).toFixed(2) * eRecord.payPerHour;
        accumWages += wagesEarned;
    }  
    return accumWages;
}
// =========================================== //



// =========================================== //
// let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
// let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

// let sTimeData = [
//   ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
//   ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
// ]

// let rTimeData = [
//   ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
//   ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
// ]

// sTimeData.forEach(function (d) {
//     let [dIn, dOut] = d
//     sRecord = createTimeInEvent(sRecord, dIn)
//     sRecord = createTimeOutEvent(sRecord, dOut)
//   })

// rTimeData.forEach(function (d, i) {
//     let [dIn, dOut] = d
//     rRecord = createTimeInEvent(rRecord, dIn)
//     rRecord = createTimeOutEvent(rRecord, dOut)
//   })

// let employees = [sRecord, rRecord]



function calculatePayroll(employees){

    let grandTotalOwed = employees.reduce((accum, currValue) => accum + allWagesFor(currValue), 0);
    return grandTotalOwed;
}
//console.log(calculatePayroll(employees))
// =========================================== //
