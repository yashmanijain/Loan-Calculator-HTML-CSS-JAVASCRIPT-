function Calculate() {

	const amount = document.querySelector("#amount").value;

	const rate = document.querySelector("#rate").value;

	const years = document.querySelector("#years").value;

	const interest = amount * Math.pow(1+ rate/100,years);

	document.querySelector("#total")
		.innerHTML = " (₹) " + interest;
}
