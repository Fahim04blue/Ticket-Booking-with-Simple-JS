//All Functions

//Function for Increasing Ticket Number
function increaseTicketNumber(id1, id2, increaseNumber) 
{
    const updatedCount = increaseNumber + 1;
    document.getElementById(id1).value = updatedCount;
    document.getElementById(id2).disabled = false;
}

//Function for Decreasing Ticket Number
function decreaseTicketNumber(id1, id2, decreaseNumber) 
{
    if (document.getElementById(id1).value == 0) 
    {
        document.getElementById(id2).disabled = true;
    } 
    else 
    {
        const updatedCount = decreaseNumber - 1;
        document.getElementById(id1).value = updatedCount;
    }
}

//Function for Input Number
function getInputNumber(ticket) 
{
    const ticketInput = document.getElementById(ticket).value;
    const ticketCount = parseInt(ticketInput);
    return ticketCount;
}

//Function for Counting Total Ticket Numbers
function ticketCount() 
{
    const firstClassTicketCount = getInputNumber('firstClass-ticket-count');
    const ecoClassTicketCount = getInputNumber('eco-class-count');

    const totalTicket = firstClassTicketCount + ecoClassTicketCount;

    return totalTicket;
}

// Functions for calculating the Grand total
function calculateSubTotal(subtotal) 
{
    const firstClassTicketCount = getInputNumber('firstClass-ticket-count');
    const ecoClassTicketCount = getInputNumber('eco-class-count');

    const subTotal = firstClassTicketCount * 150 + ecoClassTicketCount * 100;
    document.getElementById(subtotal).innerText = '$' + subTotal;
    return subTotal;
}

function calculateTax(tax) 
{
    const calcTax = calculateSubTotal("subtotal-price") * 0.1;
    document.getElementById(tax).innerText = "$" + calcTax.toFixed(2);
    return calcTax;

}

function calculateTotal(total) 
{

    const calcTotal = calculateSubTotal("subtotal-price") + calculateTax("tax-amount");
    document.getElementById(total).innerText = "$" + calcTotal;
    return calcTotal;
}

function DisplayAlert() 
{
    const newLine = "\r\n";
    var message = "Thank You! For Choosing US. Here is What we got from you";
    message += newLine;
    message += newLine;
    message += "Total Tickets : " + ticketCount();
    message += newLine;
    message += newLine;
    message += "SubTotal : " + calculateSubTotal("subtotal-price");
    message += newLine;
    message += newLine;
    message += "Tax : " + calculateTax("tax-amount");
    message += newLine;
    message += newLine;
    message += "Total : " + calculateTotal("total-price");
    alert(message);
}


//First Class Ticket Button Event Handler
const firstClassPlusBtn = document.getElementById("firstClass-ticket-count-plus");
firstClassPlusBtn.addEventListener('click', function () {

    const firstClassIncreaseNumber = getInputNumber('firstClass-ticket-count');

    increaseTicketNumber('firstClass-ticket-count', 'firstClass-ticket-count-minus', firstClassIncreaseNumber);

    calculateSubTotal("subtotal-price");
    calculateTax("tax-amount");
    calculateTotal("total-price");

})

const firstClassMinusBtn = document.getElementById('firstClass-ticket-count-minus');
firstClassMinusBtn.addEventListener('click', function () {

    const firstClassDecreaseNumber = getInputNumber('firstClass-ticket-count');

    decreaseTicketNumber('firstClass-ticket-count', 'firstClass-ticket-count-minus', firstClassDecreaseNumber);

    calculateSubTotal("subtotal-price");
    calculateTax("tax-amount");
    calculateTotal("total-price");

})

//Economic Class Ticket Button Event Handler

const EcoClassPlusBtn = document.getElementById("EcoClass-ticket-count-plus");
EcoClassPlusBtn.addEventListener('click', function () {

    const EcoClassIncreaseNumber = getInputNumber('eco-class-count');

    increaseTicketNumber('eco-class-count', "EcoClass-ticket-count-minus", EcoClassIncreaseNumber);

    calculateSubTotal("subtotal-price");
    calculateTax("tax-amount");
    calculateTotal("total-price");

})

const EcoClassMinusBtn = document.getElementById("EcoClass-ticket-count-minus");
EcoClassMinusBtn.addEventListener('click', function () {

    const EcoClassDecreaseNumber = getInputNumber('eco-class-count');

    decreaseTicketNumber('eco-class-count', "EcoClass-ticket-count-minus", EcoClassDecreaseNumber);

    calculateSubTotal("subtotal-price");
    calculateTax("tax-amount");
    calculateTotal("total-price");

})

// Alert Message 
const BookNowBtn = document.getElementById('book-now');
BookNowBtn.addEventListener('click', function () {
    DisplayAlert();

})