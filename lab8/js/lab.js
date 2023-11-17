/**
 * Author:    Kyle Chen
 * Created:   11.5.2023
 * 
 **/

var Array = [1,2,4,55,1123,13]
console.log("My array", Array)

function AddTen(x){
    var results = x + 10;
    return results;
}
console.log("10 +10= ", AddTen(10))

var arrayAdd = Array.map(AddTen)
console.log("Add ten to every value in the array: ", arrayAdd)

var arrayFunction = Array.map(function(x){
    return x - 5 * 10;
})
console.log("Every value in the array minus 50: ", arrayFunction)

