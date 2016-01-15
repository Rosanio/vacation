$(function() {
  $('#questions form').submit(function(event) {
    var name = $('input#q1').val();
    var age = $('input#q2').val();
    var weather = $('select#q3').val();
    var tourist = $('input[name="qu4"]:checked', '#questions').val();
    var globeHalf = $('select#q5').val();

    if (age > 65) {
      if (weather === "warm") {
        if (globeHalf === "north") {
          //retirement in Florida
        } else if (globeHalf === "south") {
          //retirement in Australia
        } else {
          //retirement in Amapa Brazil
        }
      } else if (weather === "cold") {
        if (globeHalf === "north") {
          //retirement in sweden
        } else if (globeHalf === "south") {
          //retirement in cape horn
        } else {
          //no cold on the equator
        }
      }
    } else {
      if (weather === "warm") {
        if (globeHalf === "north") {
          if (tourist === "love") {
            //Los Angeles
          } else if (tourist === "meh") {
            //Sedona, Arizona
          } else {
            //Plattsmouth, Nebraska
          }
        } else if (globeHalf === "south") {
          if (tourist === "love") {
            //sao paulo, Brazil
          } else if (tourist === "meh") {
            //Gold Coast, Australia
          } else {
            //swaziland, Africa
          }
        } else {
          if (tourist === "love") {
            //Jakarta
          } else if (tourist === "meh") {
            //Singapore
          } else {
            //Entebee, Uganda
          }
        }
      } else {
        if (globeHalf === "north") {
          if (tourist === "love") {
            //Toronto, Canada
          } else if (tourist === "meh") {
            //Oslo, Norway
          } else {
            //Arctic
          }
        } else if (globeHalf === "south") {
          if (tourist === "love" || tourist === "meh") {
            //Cape Horn, South America
          } else {
            //Antarctic
          }
        } else {
          //Nowhere cold on the equator
        }
      }
    }
  });
});
