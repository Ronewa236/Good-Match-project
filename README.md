# Good-Match-project
The scenario A local tennis club has decided to organise a tournament open to the general public as a way to promote tennis and the club itself. They have advertised widely and received many responses from people that are interested. As with any major tennis tournament there will be a mixed doubles event. Partners will be allocated according to an algorithm they have devised and you have been approached to write the program.
The requirements
1.	Write a program that accepts two strings and calculates the match percentage as above.
  1.	The program should only accept alphabetic characters and should gracefully handle invalid input
  2.	Casing should not matter
  3.	If the result is greater than or equal to 80, 'good match' should be appended to the output string.
2.	Modify the program to accept a CSV file as input. 
  1.	Eg 
  2.	The results should be listed from the highest percentage to the lowest. Ie. order by percentage descending
3.	If multiple results are the same, order them alphabetically.
4.	The CSV file will contain a string followed by a character indicating gender. The gender character will be either m or f 
  1.	Kimberly, f
  2.	Jason, m
  3.	Billy, m
  4.	Trini, f
  5.	Tommy, m
  6.	Zack, m
  7.	Billy, f
  8.	Jason, m
5.	Read the data, group them by the gender indicator, you will now have two sets of data, one with males, one with females. 
6.	A single set should not contain duplicates, From the example data above, Jason should only be in the male set once, however Billy will be in the male set as well as the female set.
7.	Run the good match program for every entry in the first set against every entry in the second set. Store the results
8.	Print the results in a textfile called output.txt 
3.	This is optional 
  1.	Save logs in a separate text file - what you log is up to you 
    1.	Examples of logs could include 
      1.	Execution times
      2.	When input was excluded because it was badly formatted or did not meet the criteria
  2.	Run the good match program on the data sets in reverse and get an average good match score for each combination.
  3.	Create a front end that accepts two names as input and displays the result on the page
