"use strict";

/* 
    COMP 2681 Final Project
    Coffee Run Co. Website

    Author: Sophia DiPietro
    2025-05-14

    Filename: upcomingEvents.js

    This file contains the JavaScript functions for displaying upcoming events on the events page, as well as a countdown clock that 
    displays the time left until the next event begins. 

*/

// Event listeners to run the displayEvents and eventCountdown functions when the page is loaded
window.addEventListener("load", displayEvents);
window.addEventListener("load", eventCountdown);

// Array of upcoming events
var upcomingEvents = [
    
    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Sunday Morning 10K</h1>", new Date("May 11, 2025 10:00:00"), "<p>Weekly 10K " + 
        "run through the trails and downtown streets — all paces welcome. Stick " + 
        "around after for good coffee and great conversation.</p>"],

    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Thursday Evening 5K</h1>", new Date("May 15, 2025 18:30:00"),"<p>Midweek miles. " + 
        "A 5K route through the neighbourhood followed by coffee (decaf too; we got you). " + 
        "Does it get any better?</p>"],

    ["<h1><i class='fa-solid fa-palette'></i>&nbsp;&nbsp;Local Art Show</h1>", new Date("May 17, 2025 13:00:00"), "<p>Celebrate creativity " + 
        "with us. Browse local art, sip something smooth, and connect with the artists behind the work.</p>"],

    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Sunday Morning 10K</h1>", new Date("May 18, 2025 10:00:00"), "<p>Weekly 10K " + 
        "run through the trails and downtown streets — all paces welcome. Stick " + 
        "around after for good coffee and great conversation.</p>"],
    
    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Thursday Evening 5K</h1>", new Date("May 22, 2025 18:30:00"), "<p>Midweek miles. " + 
        "A 5K route through the neighbourhood followed by coffee (decaf too; we got you). " + 
        "Does it get any better?</p>"],
    
    ["<h1><i class='fa-solid fa-music'></i>&nbsp;&nbsp;Saturday Afternoon Sip & Spin</h1>", new Date("May 24, 2025 14:00:00"), "<p>Sip something strong " + 
        "and move to the rhythm. House grooves, laid-back energy, and good company all afternoon long.</p>"],
    
    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Sunday Morning 10K</h1>", new Date("May 25, 2025 10:00:00"), "<p>Weekly 10K " + 
        "run through the trails and downtown streets — all paces welcome. Stick " + 
        "around after for good coffee and great conversation.</p>"],

    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Thursday Evening 5K</h1>", new Date("May 29, 2025 18:30:00"), "<p>Midweek miles. " + 
        "A 5K route through the neighbourhood followed by coffee (decaf too; we got you). " + 
        "Does it get any better?</p>"],
    
    ["<h1><i class='fa-solid fa-palette'></i>&nbsp;&nbsp;Local Art Show</h1>", new Date("May 30, 2025 13:00:00"), "<p>Celebrate creativity " + 
        "with us. Browse local art, sip something smooth, and connect with the artists behind the work.</p>"],

    ["<h1><i class='fa-solid fa-music'></i>&nbsp;&nbsp;Saturday Afternoon Sip & Spin</h1>", new Date("May 31, 2025 14:00:00"), "<p>Sip something strong " + 
        "and move to the rhythm. House grooves, laid-back energy, and good company all afternoon long.</p>"],
    
    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Sunday Morning 10K</h1>", new Date("June 1, 2025 10:00:00"), "<p>Weekly 10K " + 
        "run through the trails and downtown streets — all paces welcome. Stick " + 
        "around after for good coffee and great conversation.</p>"],
    
    ["<h1><i class='fas fa-running'></i>&nbsp;&nbsp;Thursday Evening 5K</h1>", new Date("June 5, 2025 18:30:00"),"<p>Midweek miles. " + 
        "A 5K route through the neighbourhood followed by coffee (decaf too; we got you). " + 
        "Does it get any better?</p>"]
]

// Function to display the next 5 upcoming events
function displayEvents() {
    var eventsDiv = document.getElementById("eventsDiv");
    var currentDate = new Date();

    // Counter variable to control how many events are displayed
    var eventCount = 0;

    // Sorts the events by date
    upcomingEvents.sort(function(a, b) {
        return a[1] - b[1];
    });

    // Loops through the items in the upcomingEvents array 
    for (var i = 0; i < upcomingEvents.length; i++) {
        var event = upcomingEvents[i];

        // Gets the event name, date, and description for the current event
        var eventTitle = event[0];
        var eventDate = event[1];
        var eventDescription = event[2];

        /* If the date of the current event is in the future and the event count is less than 5, a div is created to 
        display the name, date, and description of the current event. If the current event has already passed or there is already 5 events
        being displayed, the event will not be displayed. */
        if (eventDate > currentDate && eventCount < 5) {
            var eventCard = document.createElement("div");
            eventCard.className = "event";

            eventCard.innerHTML = "<h2>" + eventTitle + "</h2>" +
                "<p><strong>" + eventDate.toLocaleDateString() + " @ " + eventDate.toLocaleTimeString() + "</strong></p>" +
                "<p>" + eventDescription + "</p>";
        
            eventsDiv.appendChild(eventCard);
            eventCount++;
        }
    }
}

/* Function to display a live countdown timer for the next upcoming event. The timer updates once every second. 
Once the event date/time arrives, the timer refreshes to countdown to the next event. */
function eventCountdown() {
    var now = new Date();

    var futureEvents = [];

    // Filters events that are in the future
    for (var i = 0; i < upcomingEvents.length; i++) {
        if (upcomingEvents[i][1] > now) {
            futureEvents.push(upcomingEvents[i]);
        }
    }

    // Sorts future events by date
    futureEvents.sort(function(a, b) {
        return a[1] - b[1];
    });
  
    // Makes sure there is an upcoming event to display the timer for
    if (futureEvents.length > 0) {
        // Gets the date of the next upcoming event
        var nextEventDate = futureEvents[0][1];
        var timerDiv = document.getElementById("countdownTimer");

        // Timer interval variable to clear it once the event has passed
        var timerInterval;
  
        /* Function to calculate and display the time remaining until the next event, updating every second. 
        Once the event time is passed, the timer is reset to countdown to the next upcoming event. */
        function updateCountdown() {
            var now = new Date();
            var timeLeft = nextEventDate - now;
  
            // Stops the current countdown and sets the countdown for the next event once the event starts
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                eventCountdown();
                return;
            }
  
            var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hrsLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minsLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var secsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
            timerDiv.innerHTML = daysLeft + "d " + hrsLeft + "h " + minsLeft + "m " + secsLeft + "s";
        }

        // Call updateCountdown once every second 
        var timerInterval = setInterval(updateCountdown, 1000); 

    } else {
        // If there are no upcoming events, display a message to the user
      document.getElementById("countdownTimer").textContent = "No upcoming events";
    }
  }

