console.log("Hello World!!!");

function myFunction() {
    let fahr = 60;
    let celius = (fahr - 32) / 9 * 5;
    document.getElementById("demo").innerHTML =
	fahr + "F '=\" " + celius + "C";
}
