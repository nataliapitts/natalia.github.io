/*
Script to display the year in the footer.

*/

var time=new Date();
var year=time.getYear();
if (year < 2000)
	year = year + 1900;
document.write(" " + year + " ");