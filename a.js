console.log("Hello World!!!");

function myFunction() {
    lower = 0; /* lower limit of temperatuire scale */
    upper = 300; /* upper limit */
    step = 20; /* step size */

    let fahr = lower;
//    document.getElementById("demo").innerHTML = "";
    while (fahr <= upper) {
        let celius = (fahr - 32) / 9 * 5;
        document.getElementById("demo").innerHTML +=
	    "<br/>" + fahr + "F = " + celius.toFixed(2) + "C";
        fahr = fahr + step;
    }
}
