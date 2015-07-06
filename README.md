# primeNumberTable
This is a simple program to print a Prime Number Multiplication Table to either your localhost:3000 in a browser or to the terminal.  Utilizing express framework, sprintf-js npm package module, jade for templating, and jasmine as a testing suite.

1.) Clone the repository to a directory of your choosing 
2.) CD to the directory and run npm install


View from your browser: 
1.) From the command line, run "npm start"
2.) Navigate to localhost:3000 and enter in the # of Prime Numbers you'd like to build your multiplication table with.
3.) Continue to change the # of Prime Numbers to alter the table.


View from terminal: 
1.) From the command line, run "node primeNumber.js 10".
2.) The number 10 from the step above is interchangeable with any number.  If you leave "10" blank, the program defaults to 10.  Any string, -number, null, undefined, or etc will default to 10. 
3.) Continue to change the "10" to any number to alter the table size.

*At the bottom of the terminal out put is the line "Algorithm Time Performance Test".  This shows (in milliseconds) the time it takes to run the program.