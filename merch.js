"use strict";

/* 
    COMP 2681 Final Project
    Coffee Run Co. Website

    Author: Sophia DiPietro (T00714296)
    2025-05-14

    Filename: merch.js

    This file contains a function to display the Coffee Run Co. merchandise items on the "Merch" page.
*/

// Event listener to run the displayMerch function when the page is loaded
window.addEventListener("load", displayMerch);

// Array of merchandise items to be displayed
var products = [
    ["Images/Merch/creamCrew.png", "CRC Crew in Cream<br>$60.00"],
    ["Images/Merch/blackCrew.png", "CRC Crew in Black<br>$60.00"],
    ["Images/Merch/creamTee.png", "CRC Tee in Cream<br>$25.00"],
    ["Images/Merch/blackTee.png", "CRC Tee in Black<br>$25.00"],
    ["Images/Merch/tote.png", "CRC Tote<br>$30.00"],
    ["Images/Merch/coffeeBeans.png", "Locally Roasted Coffee Beans 12oz<br>$22.00"],
    ["Images/Merch/mug.png", "CRC Mug<br>$18.00"],
    ["Images/Merch/handcraftedMugs.png", "Locally Made Handcrafted Mugs<br>$30.00"],
    ["Images/Merch/runningBelt.png", "CRC Running Belt<br>$25.00"],
    ["Images/Merch/waterBottle.png", "CRC Insulated Water Bottle 240z.<br>$30.00"]
]

// Function to create and insert merchandise items into the merchDiv <div> element
function displayMerch() {
    var merchDiv = document.getElementById("merchDiv");

    // Loops through all of the products in the array 
    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        // Gets the product image and name for the current item
        var productImage = product[0];
        var productName = product[1];

        // Creates a div element for the current item
        var productBox = document.createElement("div");
        productBox.className = "productBox";

        // Adds the image and name of the current product to the productBox div
        productBox.innerHTML = "<img src='" + productImage + "' alt=''><p>" + productName + "</p>";

        // Appends the productBox div to the merchDiv
        merchDiv.appendChild(productBox);
    }

}