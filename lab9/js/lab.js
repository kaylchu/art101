/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Kyle Chen
   Date: 2023
*/

$(".challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".challenge").toggleClass("special");
});

$(".problems").append("<button id='button-problems'>Make Special</button>");

$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".problems").toggleClass("special");
});

$(".results").append("<button id='button-results'>Make Special</button>");

$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".results").toggleClass("special");
});