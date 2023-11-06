/**
 * Author:    Kyle Chen
 * Created:   11.1.2023
 * 
 **/

// function to sort username by taking input of user and sort letters of their name
function sortUserName() {
    var userName =  window.prompt("Please input your name here:");
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

document.writeln("Here is your name with its letters sorted:", sortUserName());