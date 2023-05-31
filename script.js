
//Is not possible to select to same cities at From and To field
document.addEventListener('DOMContentLoaded', function() {
    var fromSelect = document.getElementById('train-from');
    var toSelect = document.getElementById('train-to');

    fromSelect.addEventListener('change', function() {
        var selectedValue = fromSelect.value;

        // Enable all options in the "To" select
        for (var i = 0; i < toSelect.options.length; i++) {
            toSelect.options[i].disabled = false;
        }

        // Disable the selected option in the "To" select
        for (var i = 0; i < toSelect.options.length; i++) {
            if (toSelect.options[i].value === selectedValue) {
                toSelect.options[i].disabled = true;
            }
        }
    });
});

function submitForm() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    
    alert("Confirmation will be sent to: " + email);
}

// First Class Price
document.getElementById('first-class-plus').addEventListener('click', function () {
    handleTicketPrice('first-class', true);
})

document.getElementById('first-class-minus').addEventListener('click', function () {
    handleTicketPrice('first-class', false);
})

//Economy Class Price

document.getElementById('economy-class-plus').addEventListener('click', function () {
    handleTicketPrice('economy-class', true);
})

document.getElementById('economy-class-minus').addEventListener('click', function () {
    handleTicketPrice('economy-class', false);
})

/// First Class Kid price
document.getElementById('first-class-kid-plus').addEventListener('click', function () {
    handleTicketPrice('first-class-kid', true);
})

document.getElementById('first-class-kid-minus').addEventListener('click', function () {
    handleTicketPrice('first-class-kid', false);
})

// Economy Class Kid Price
document.getElementById('economy-class-kid-plus').addEventListener('click', function () {
    handleTicketPrice('economy-class-kid', true);
})

document.getElementById('economy-class-kid-minus').addEventListener('click', function () {
    handleTicketPrice('economy-class-kid', false);
})




// Common function for both Class ticket

function handleTicketPrice(ticket, isIncrease) {
    let currentTicketNumber = document.getElementById(ticket + '-ticket-number').value;
    currentTicketNumber = parseInt(currentTicketNumber);

    let newTicketNumber = currentTicketNumber;

    if (isIncrease == true) {
        newTicketNumber = currentTicketNumber + 1;
    }

    if (isIncrease == false && currentTicketNumber > 0) {
        newTicketNumber = currentTicketNumber - 1;
    }

    document.getElementById(ticket + '-ticket-number').value = newTicketNumber;

    let ticketPrice = 0;

    if (ticket == 'first-class') {
        ticketPrice = newTicketNumber * 100;
    } else if (ticket == 'economy-class') {
        ticketPrice = newTicketNumber * 50;
    } else if (ticket == 'first-class-kid') {
        ticketPrice = newTicketNumber * 50;
    } else if (ticket == 'economy-class-kid') {
        ticketPrice = newTicketNumber * 25;
    }

    console.log(ticketPrice);
    calculateTotal();
}


//making return disabled after radio button is pressed.
const oneWayRadio = document.getElementById("one-way");
const returnDateInput = document.getElementById("return-date");
const returnTimeInput = document.getElementById("return-time");

oneWayRadio.addEventListener("change", function() {
  returnDateInput.disabled = this.checked;
  returnTimeInput.disabled = this.checked;
});

//This code adds a clock on the main window.
function updateClock() {
    var clock = document.getElementById('clock');
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    
    clock.textContent = hours + ':' + minutes + ':' + seconds;
  }

  
  setInterval(updateClock, 1000);
//Total Price
function calculateTotal() {
    const firstClassTicket = document.getElementById('first-class-ticket-number');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);

    const firstClassKidTicket = document.getElementById('first-class-kid-ticket-number');
    const firstClassKidTicketNumber = parseInt(firstClassKidTicket.value);

    const economyClassTicket = document.getElementById('economy-class-ticket-number');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    const economyClassKidTicket = document.getElementById('economy-class-kid-ticket-number');
    const economyClassKidTicketNumber = parseInt(economyClassKidTicket.value);

    const totalTicketPrice = firstClassTicketNumber * 100 + economyClassTicketNumber * 50 + firstClassKidTicketNumber * 50 + economyClassKidTicketNumber * 25;
    document.getElementById('price-subtotal').innerText = totalTicketPrice;

    const totalfees = 0.1 * totalTicketPrice;
    document.getElementById('price-fees').innerText = totalfees;

    const priceTotal = totalTicketPrice + totalfees;
    document.getElementById('price-total').innerText = priceTotal;

    document.getElementById('confirmation-price-total').value = priceTotal;
}






