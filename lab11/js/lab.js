/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Author: Kyle Chen
   Date: 2023
*/

function sortUserName() {
    var userName =   $("#input").val();
    console.log("userName=", userName); 

    //split username
    var nameArray = userName.split('');
    console.log("nameArray=", nameArray);

    //sort username
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);

    //join username
    var joinNameArray = nameArraySort.join('');
    console.log("joinNameArray=", joinNameArray);

    //return sorted name
    return joinNameArray;
}

// click listener for button
$("#submit").click(function(){
    const userName = $("#input").val();

    userNameSorted = sortUserName(userName);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});

