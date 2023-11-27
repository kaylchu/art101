// Experiment with loops.

// Kyle Chen

// November 2023

function fizzBuzz() {
    var outputString = "";
    
    for (var i = 1; i <= 200; i++) {
      var str = "";

      if (i % 3 === 0) {
        str += "Fizz!";
      }
      if (i % 5 === 0) {
        str += "Buzz!";
      }
      if (i % 7 === 0) {
        str += "Boom!";
      }

      if (str === "") {
        str = i;
      }

      outputString += str + "<br>";
    }

    $("#output").html(outputString);
  }

  // Call the function
  fizzBuzz();   