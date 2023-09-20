console.log("Hello World!!!");

function myFunction() {
    lower = 0; /* lower limit of temperatuire scale */
    upper = 300; /* upper limit */
    step = 20; /* step size */

    let fahr = lower;
    while (fahr <= upper) {
        let celius = (fahr - 32) / 9 * 5;
        document.getElementById("demo").innerHTML =
	    fahr + "F '=\" " + celius + "C";
        fahr = fahr + step;
    }
}
