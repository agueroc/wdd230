//Declaring date variable
let d = new Date();

//Retreiving Year
let year = d.getFullYear();

//Displaying Year
document.getElementById("year").textContent = year;

//Declaring and Assigning lastModified variable
var LastUpdated = document.lastModified;

//Displaying lastModified variable
document.getElementById("lastupdated").innerHTML = LastUpdated.toString();