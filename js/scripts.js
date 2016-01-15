$(function() {
  $('#questions form').submit(function(event) {
    var name = $('input#q1').val();
    var age = $('input#q2').val();
    var weather = $('select#q3').val();
    var tourist = $('input[name="qu4"]:checked', '#questions').val();
    var globeHalf = $('select#q5').val();

    var answers = ['.florida_retirement', '.australia_retirement', '.brazil_retirement', '.sweden_retirement', '.cape_horn_retirement', '.equator_cold', '.los_angeles', '.sedona', '.plattsmouth', '.sao_paulo', '.gold_coast', '.swaziland', '.jakarta', '.singapore', '.entebee', '.toronto', '.oslo', '.arctic', '.cape_horn', '.antarctic'];
    answers.forEach(function(answer) {
      $(answer).hide();
    });

    $('.user_name').text(name);
    if (name.length === 0) {
      alert('Please enter your name');
    } else if (age.length === 0) {
      alert('Please enter your age')
    } else {
      if (age > 65) {
        if (weather === "warm") {
          if (globeHalf === "north") {
            $('.florida_retirement').show();
          } else if (globeHalf === "south") {
            $('.australia_retirement').show();
          } else {
            $('.brazil_retirement').show();
          }
        } else if (weather === "cold") {
          if (globeHalf === "north") {
            $('.sweden_retirement').show();
          } else if (globeHalf === "south") {
            $('.cape_horn_retirement').show();
          } else {
            $('.equator_cold').show();
          }
        }
      } else {
        if (weather === "warm") {
          if (globeHalf === "north") {
            if (tourist === "love") {
              $('.los_angeles').show();
            } else if (tourist === "meh") {
              $('.sedona').show();
            } else {
              $('.plattsmouth').show();
            }
          } else if (globeHalf === "south") {
            if (tourist === "love") {
              $('.sao_paulo').show();
            } else if (tourist === "meh") {
              $('.gold_coast').show();
            } else {
              $('.swaziland').show();
            }
          } else {
            if (tourist === "love") {
              $('.jakarta').show();
            } else if (tourist === "meh") {
              $('.singapore').show();
            } else {
              $('.entebee').show();
            }
          }
        } else {
          if (globeHalf === "north") {
            if (tourist === "love") {
              $('.toronto').show();
            } else if (tourist === "meh") {
              $('.oslo').show();
            } else {
              $('.arctic').show();
            }
          } else if (globeHalf === "south") {
            if (tourist === "love" || tourist === "meh") {
              $('.cape_horn').show();
            } else {
              $('.antarctic').show();
            }
          } else {
            $('.equator_cold').show();
          }
        }
      }
    }

    event.preventDefault();
  });
});
