minAndMaxValue();
spring(12, 12);
leapYear(2004);
flipCoin();

function minAndMaxValue() {
    let num1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    let num2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    let num3 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    let num4 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    let num5 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    console.log("5 Random 3 Digit values : " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5);
    if (num1 > num2) {
        var max = num1;
        var min = num2;
    } else {
        max = num2;
        min = num1;
    } if (num3 > max) {
        max = num3;
    } if (num3 < min) {
        min = num3;
    } if (num4 > max) {
        max = num4;
    } if (num4 < min) {
        min = num4;
    } if (num5 > max) {
        max = num5;
    } if (num5 < min) {
        min = num5;
    }
    console.log("Max : " + max);
    console.log("Min : " + min);
}

function spring(date, month) {
    if (month <= 6 && date <= 20) {
        console.log("True")
    }
    else if ((month >= 3 && month < 6) && (date < 31)) {
        console.log("True")
    }
    else {
        console.log("False");
    }
}



function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                leap = true;
            else
                leap = false;
        }
        else
            leap = true;
    }
    else
        leap = false;
    if (leap)
        console.log(year + " is a leap year.");
    else
        console.log(year + " is not a leap year.");
}

function flipCoin() {
    var coin = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (coin == 1) {
        console.log("Head");
    } else {
        console.log("Tails");
    }
}


