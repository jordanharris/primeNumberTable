$('input').on('change', function(){
	var numberPrimes = parseInt($(this).val()),
		validatePrimeEntry; 
	if (numberPrimes || numberPrimes === 0) {
		validatePrimeEntry = validateNumber(numberPrimes);
	}
	return primeNumber(validatePrimeEntry);
})


/*
primeNumber function is a function that takes one argument and writes to the document
@param - Number (Number) - Number of Prime Numbers to build Multiplication Table from
Example return from function:
	document.write(myString = "<table><tr><td>2</td><td>3</td><td>5</td></tr></table>")
*/
function primeNumber(Number) {
	var xTableSize = Number || Number === 0 ? Number : 10;
	var primes = getPrimes(xTableSize);
	if (primes === false) {
		$('.prime-table').empty(primeTable).append("<h2>Sorry! unable to draw you a Table of " + Number + " Prime Numbers!</h2>");
		return;
	}
	var primeTable = createPrimeTable(primes);
	$('.prime-table').empty(primeTable).append(primeTable);
}

/*
getPrimes function is a stand alone function that takes one argument and returns an array of Prime Numbers
@param - xTableSize (Number) - Number of Prime Numbers to find, inclusive
Example return from function:
	[2,3,5,7,11,13,17,19,23,29]
*/
function getPrimes(xTableSize) {
	var primeArray = [2], // setting first Prime Number Value to 2.  If table is to be created, it must be >= to primeArray.length === 1.  So inclusion of 2 incurs one less loop to iterate.
		n = 3, 
		primeNumber;
	if (xTableSize === 0) {
		return false;
	}
	while (primeArray.length < xTableSize) {
		primeNumber = true;
		for (i = 2 ; i <= Math.floor(Math.sqrt(n));  i++) {
			if (n % i === 0) {
				primeNumber = false;
			}
		}
		if(primeNumber) {
			primeArray.push(n);
		}
		n++;
	}
	return primeArray;
}


/*
createPrimeTable function is a stand alone function that takes one argument and returns a table string
@param - primeNumbersArray (array of Numbers) - Array of Prime Numbers to build Multiplication Table from
Example return from function:
	myString = "<table><tr><td>2</td><td>3</td><td>5</td></tr></table>"
*/
function createPrimeTable(primeNumbersArray) {
	var myString = "";
	primeNumbersArray.unshift(1); // Adds the number 1 to the front of the primeNumberArray to be able to multiply the array by itself to create the table via the loop.
	if (!primeNumbersArray || primeNumbersArray === null || primeNumbersArray.length < 2) {
		return false;
	}
	for(var i = 0; i < primeNumbersArray.length; i++){
		myString += "<tr class='prime-row'>";
		for(var m = 0; m < primeNumbersArray.length; m++) {
			if(i === 0 && m === 0) {
				myString += "<td class='row-start prime-cell'></td>";
			} else {
				myString += "<td class='prime-cell'>"+primeNumbersArray[i]*primeNumbersArray[m]+"</td>";
			}
		}
		myString += "</tr>";
	};
return myString;
}

function validateNumber(val) {
	var validRegEx = /^\d*$/;
	var testRegEx = validRegEx.test(val);
	if (!testRegEx) {
		return false;
	}
	return val;
}