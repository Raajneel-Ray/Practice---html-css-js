function compute () {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    if(principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
         document.getElementById("result").innerHTML = `If you deposit $${principal},<br>
                                        at an interest rate of ${rate}%<br>
                                        You will receive an amount $${amount}<br>
                                        at the end of year ${year}.<br>`;
    }
}   

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}