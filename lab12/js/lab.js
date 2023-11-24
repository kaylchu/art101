// Kyle Chen
// November 2023
//Create function that sorts names into houses.

//sorting function
//credit to chatGPT for helping with code
function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
  
    if (mod === 0) {
      return "Gryffindor";
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Slytherin";
    } else {
      return "Hufflepuff";
    }
  }

  $("#button").click(function(){
    var name = $("#input").val();

    var house = sortingHat(name)
    $("#output").html("<h1>" + "The sorting hat has sorted you into " + house + "." + "<h1>");
  })