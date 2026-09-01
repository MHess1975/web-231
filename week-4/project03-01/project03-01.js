/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author:Mitchell Hess
      Date:August 31, 2026

      Filename: project03-01.js
*/

//Declares variable menuItems
let menuItems = document.getElementsByClassName("menuItem");

// Loop through each menu item and run calcTotal when it is clicked
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Calculate the total cost of the selected menu items
function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }