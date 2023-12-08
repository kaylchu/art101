/* 
Author: Kyle Chen
Date: 12/7/23
*/

$("#output").click(function(){

$.ajax({
    url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(response) {
        const comicObj = JSON.parse(response.contents);

        $("#output").append("<h2>" + (comicObj.title || 'Title not available') + "</h2>");

        const image = comicObj.img;
        const desc = comicObj.alt;

        if (comicObj.img) {
            $("#output").append("<img src=" + image + " />");
        } else {
            $("#output").append("<p>Image not available</p>");
            }
        $("#output").append("<p>" + desc + "</p>");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
});
})