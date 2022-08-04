function calculateOrdDate() {
    // get client input
    let batch = document.getElementById("batch").value;
    let year = document.getElementById("year").value;
    // validate input (type & range check)

    if (batch.length == 0 || year.length == 0 || isNaN(batch) || isNaN(year) || parseInt(batch) < 1 || parseInt(batch) > 500 || ![3, 4].includes(parseInt(year))) {
        document.getElementById("date").innerHTML = "Invalid<br>Input";
        return;
    }
    // calculate ord date based on batch & year
    let ordDate;
    if (batch % 2 != 0) {
        // odd batch ord date (reference: b1 y3, jul 31, 22)
        let addYears = Math.floor(batch / 2) + (year - 3);
        ordDate = new Date(2021 + addYears, 6, 31); // note: JS counts months from 0 to 11
    } else {
        // even batch ord date (reference: b2 y3, apr 1, 22)
        let addYears = Math.floor(batch / 2 - 1) + (year - 3);
        ordDate = new Date(2022 + addYears, 3, 5);
    }
    // update number of days till ord
    let currentDate = new Date();
    let daysTillOrd = Math.floor((ordDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    if (daysTillOrd > 0) {
        document.getElementById("date").innerHTML = "You ORD in<br>" + daysTillOrd + " days";
    } else {
        document.getElementById("date").innerHTML = "ORD LO!";
    }
}
