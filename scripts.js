function temperature () {
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var cel = document.getElementById("celsius").value;
    var f = (cel * 9/5) + 32;
    document.getElementById("farenheit").value = f;
}

function weight () {
    //To convert Kg to Pounds
    //kg*2.2
    var wgt = document.getElementById("kilo").value;
    var lbs = wgt * 2.2;
    document.getElementById("pounds").value = lbs;
}

function distance () {
    // to convert kilometer to miles
    // km * 0.62137
    var km = document.getElementById("km").value;
    var miles = km * 0.62137;
    document.getElementById("miles").value = miles;
}