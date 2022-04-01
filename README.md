# Good-Match-project
The scenario A local tennis club has decided to organise a tournament open to the general public as a way to promote tennis and the club itself. They have advertised widely and received many responses from people that are interested. As with any major tennis tournament there will be a mixed doubles event. Partners will be allocated according to an algorithm they have devised and you have been approached to write the program.

# Step 1: Counting how many times a character occurs in the sentence

- Convert the input sentence into an array of characters using string.split() method
- remove empty spaces using array.filer() method
- loop through the array and for every element create a loop to compare with
  every other element in the array and if they are equal, count it
- after counting element occurance add the count to total but as a string

# Step 2: Reducing the number/string to a two digit value

- create a result variable and assign it empty string (e.g toReturn)
- create while loop, while input string length is > 2, take the first and last
  numbers/items in the string, convert them to numbers and get their sum
- concatenate that sum to result variable and the remove those from the input string
- if input string length is 1 then concatenate it to the result variable
- if input string length is = 2 and result variable is empty string then return input string
- if input string lenghth is 2 and result variable is not empty string, take the first and last
  numbers/items in the string, convert them to numbers and get their sum
- concatenate that sum to result variable and the remove those from the input string

after input has qualified for one of the conditionals above except for the conditional that has return statement, we'll apply recursion and return a call to the current function passing our result variable as input.
the process above will repeat until the conditional that has return statement executes

# For reading the CSV file

This explains better how I figured to read the file:
https://stackoverflow.com/questions/29393064/reading-in-a-local-csv-file-in-javascript

# Writing to .txt file

https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

