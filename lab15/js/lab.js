//Kyle Chen
// November 2023
//Experiment with JSON and AJAX


$("#activate").click(function(){
    $.ajax({    
        "url": "https://yesno.wtf/api",
        "type": "GET",
        "dataType": "json",
        "success": function(data) {
            console.log(data);
            $("#output").append("<p>" + data.answer);
            $("#output").append(data.forced);
            $("#output").append("<img src =" + data.image + ">");
        },
        "error": function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
})