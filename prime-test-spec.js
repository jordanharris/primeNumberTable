  var prime = require("./primeNumber.js");
  var Jasmine = require('jasmine');
  var jasmine = new Jasmine();

  describe("GetPrimes", function () {

  	it('should return function if it is a function', function() {
        expect(typeof prime.getPrimes).toBe("function");
    });

  	it('getPrimes should return false for all non-integers', function() {
        expect(prime.getPrimes(0)).toEqual(false);
        expect(prime.getPrimes()).toEqual(false);
        expect(prime.getPrimes(null)).toEqual(false);
        expect(prime.getPrimes("wrerhgdf")).toEqual(false);
        expect(prime.getPrimes(undefined)).toEqual(false);
        expect(prime.getPrimes(-6)).toEqual(false);
    });

  	it('should return an array of prime numbers', function() {
        expect(prime.getPrimes(1)).toEqual([2]);
        expect(prime.getPrimes(2)).toEqual([2,3]);
        expect(prime.getPrimes(5)).toEqual([2,3,5,7,11]);
        expect(prime.getPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
        expect(prime.getPrimes(15)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
    });

  })

  describe("primeNumberTable", function () {
  	
  	it('should return function if it is a function', function() {
        expect(typeof prime.primeNumberTable).toBe("function");
    });

  	it('should print x # of prime numbers multiplcation table', function() {
        expect(prime.primeNumberTable(1)).toEqual(1);
        expect(prime.primeNumberTable(2)).toEqual(2);
        expect(prime.primeNumberTable(5)).toEqual(5);
        expect(prime.primeNumberTable(11)).toEqual(11);
    });

    it('should return false if 0 is passed in as length of table', function() {
        expect(prime.primeNumberTable(0)).toEqual(false);
    });

    it('should default to 10 primes if type of Number not passed or if nothing is passed', function() {
        expect(prime.primeNumberTable("sfgfsgd")).toEqual(10);
        expect(prime.primeNumberTable([4,5,5])).toEqual(10);
        expect(prime.primeNumberTable(null)).toEqual(10);
        expect(prime.primeNumberTable(undefined)).toEqual(10);
        expect(prime.primeNumberTable(-6)).toEqual(10);
        expect(prime.primeNumberTable()).toEqual(10);
    });

  });
  jasmine.execute();