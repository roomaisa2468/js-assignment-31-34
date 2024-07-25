//////////assignement-31-34
// ques : 1
function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toString();
    var dateTimeElement = document.querySelector('.date-time');
    if (dateTimeElement) {
        dateTimeElement.innerHTML = dateTimeString;
    }
}
displayDateTime();
setInterval(displayDateTime, 1000);

// ques : 2
function alertCurrentMonth() {
    var now = new Date();
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var currentMonth = monthNames[now.getMonth()];
    alert(currentMonth);
}
alertCurrentMonth();

// ques : 3
function alertCurrentDay() {
    var now = new Date();
    var dayNames = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];
    var currentDay = dayNames[now.getDay()];
    alert(currentDay);
}
alertCurrentDay();

// ques : 4
function checkFunDay() {
    var now = new Date();
    var dayOfWeek = now.getDay(); 

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        alert("It’s Fun day");
    }
}
checkFunDay();

// ques : 5
function showMonthDaysMessage() {
    var now = new Date();
    var dayOfMonth = now.getDate(); 

    if (dayOfMonth < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}
showMonthDaysMessage();


// ques : 6
var now = new Date(); 
var millisecondsSinceEpoch = now.getTime(); 
var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60)); 
console.log(minutesSinceEpoch); 

// ques : 7
function checkAMorPM() {
    var now = new Date();
    var hours = now.getHours(); 

    if (hours < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}
checkAMorPM()

// ques : 8
var laterDate = new Date(2020, 11, 31); 
console.log(laterDate);

// ques : 9
function daysSinceRamadanStart() {
    var currentDate = new Date(); 
    var ramadanStart = new Date(2015, 5, 18); 
    var timeDifference = currentDate - ramadanStart;
    var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    alert(daysPast);
}

daysSinceRamadanStart();


// ques : 10
function displayElapsedSeconds() {
    var referenceDate = new Date(); 
    var startDate = new Date(2015, 0, 1); 
    var timeDifference = referenceDate - startDate;
    var secondsElapsed = Math.floor(timeDifference / 1000);
    document.getElementById('elapsedSeconds').innerText = `Seconds elapsed since January 1, 2015: ${secondsElapsed}`;
}
displayElapsedSeconds();

// ques : 11
function updateDateAndDisplay() {
    var currentDate = new Date(); 
    var hours = currentDate.getHours();
    currentDate.setHours(hours + 1);
    document.getElementById('updatedDateTime').innerText = `Updated Date and Time: ${currentDate}`;
}
updateDateAndDisplay();

// ques : 12
function showDateHundredYearsBack() {
    var currentDate = new Date(); 
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    alert(`Date 100 years back: ${currentDate}`);
}
showDateHundredYearsBack();


// ques : 13
function calculateBirthYear() {
    var ageInput = document.getElementById('age').value; // Get the user's age from the input field
    var currentYear = new Date().getFullYear(); // Get the current year
    var birthYear = currentYear - ageInput; // Calculate the birth year
    
      document.getElementById('birthYear').innerText = `Your birth year is: ${birthYear}`;
}


// ques : 14
function generateBill() {
    // Retrieve user input values
    var customerName = document.getElementById('customerName').value;
    var currentMonth = document.getElementById('currentMonth').value;
    var numberOfUnits = parseFloat(document.getElementById('units').value);
    var chargesPerUnit = parseFloat(document.getElementById('chargesPerUnit').value);
    var latePaymentSurcharge = parseFloat(document.getElementById('latePaymentSurcharge').value);
    
    // Calculate amounts
    var netAmountPayable = numberOfUnits * chargesPerUnit;
    var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
    
    // Round off amounts to 2 decimal places
    netAmountPayable = netAmountPayable.toFixed(2);
    grossAmountPayable = grossAmountPayable.toFixed(2);
    
    // Display the bill details
    var billDetails = `
        <h2>Bill Details</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Current Month:</strong> ${currentMonth}</p>
        <p><strong>Number of Units:</strong> ${numberOfUnits.toFixed(2)}</p>
        <p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>
        <p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>
        <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>
        <p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>
    `;
    
    document.getElementById('billDetails').innerHTML = billDetails;
}
