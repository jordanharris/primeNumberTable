var sprintf = require("sprintf-js").sprintf, //Using sprintf-js for 'pretty' printing to the console.
    vsprintf = require("sprintf-js").vsprintf, 
    self = this;


/*
primeNumber function is a function that takes one argument and writes to the document
@param - Number (Number) - Number of Prime Numbers to build Multiplication Table from
Example return from function:
	2  3  5
  2	4  6  10
  3 6  9  15
  5 10 15 25
*/
module.exports.primeNumberTable = function primeNumberTable(Number) {
	console.time('Algorithm Time Performance Test'); //Start the timer for the Performance of the algorithm
	var valNumber = validateNumber(Number);
	var xTableSize = valNumber ? Number : 10;
	var primes = self.getPrimes(xTableSize);
	var primaryArray = [];
	var myString = "";
	if (!primes || primes === null || primes.length < 1) {
		console.log("Sorry! unable to draw you a Table of " + Number + " Prime Numbers!");
		return false;
	}
	primes.unshift(1); // Adds the number 1 to the front of the primes array to be able to multiply the array by itself to create the table via the loop.
	for (var d = 0; d < primes.length; d++) { // Creates equal number of %s in vsprintf to match with primaryArray.length to print to console.
		myString += " %s ";
	}
	for (var i = 0; i < primes.length; i++){
		for(var m = 0; m < primes.length; m++) {
			if (i === 0 && m ===0) {
				primes[i] = ' '; //clears cell A0 so the table doesn't have a number in the top and left most cell
				console.log(vsprintf(myString,primes))
				primes[i] = 1; //adds back 1 to the front of the array.  See primes.unshift(1) above for further explanation.
			} else {
				primaryArray.push(primes[i]*primes[m]);
			}
		}
		if (i !== 0) {
			console.log(vsprintf(myString, primaryArray))
		}
		primaryArray = [];
	};
	console.timeEnd('Algorithm Time Performance Test'); //End the timer for the Performance of the algorithm
	return xTableSize;
}

/*
getPrimes function is a stand alone function that takes one argument and returns an array of Prime Numbers
@param - xTableSize (Number) - Number of Prime Numbers to find, inclusive
Example return from function:
	[2,3,5,7,11,13,17,19,23,29]
*/
module.exports.getPrimes = function getPrimes(xTableSize) {
	var valNumber = validateNumber(xTableSize);
	var primeArray = [2], // setting first Prime Number Value to 2.  If table is to be created, it must be >= to primeArray.length === 1.  So inclusion of 2 incurs one less loop to iterate.
		n = 3, 
		primeNumber;
	if (xTableSize === 0 || !valNumber) {
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
validateNumber function is a stand alone helper function that takes one argument and returns true or false if the passed value is a number
@param - val (Number) - Number to validate
Example return from function:
	true
*/
function validateNumber(val) {
	var validRegEx = /^\d*$/;
	var testRegEx = validRegEx.test(val);
	if (!testRegEx) {
		return false;
	}
	return true;
}

self.primeNumberTable(parseInt(process.argv[2]));
