var $form1 = $('form#halo-form1'),
    url = 'https://script.google.com/macros/s/AKfycbzO2mre_cAFsawoaK8i2pWyDTZeODYiakRXr78O_aDZMTj7Lg/exec'

var $form2 = $('form#halo-form2'),
    url = 'https://script.google.com/macros/s/AKfycbzO2mre_cAFsawoaK8i2pWyDTZeODYiakRXr78O_aDZMTj7Lg/exec'

$('#submit-form1').on('click', function(e) {
  $("#halo-form1-submitted").html("Submitted!");
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form1.serializeObject(),
    success: function (rooms) {
      // TODO: there is a 1 second delay before this happens, which makes sense,
      //   but the user does not get an instant feedback so they could keep pressing again
      //   so we print "Submitted!" as soon as they click
    }
  });
})

$('#submit-form2').on('click', function(e) {
  $("#halo-form2-submitted").html("Submitted!");
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form2.serializeObject(),
    success: function (rooms) {
      // TODO: there is a 1 second delay before this happens, which makes sense,
      //   but the user does not get an instant feedback so they could keep pressing again
      //   so we print "Submitted!" as soon as they click
    }
  });
})


// Real gifts section

$(".img-giftcard").mouseover(function() {
    $(this).css({ width: '105%', height: 'auto' });
});

$(".img-giftcard").mouseout(function() {
    $(this).css({ width: '100%', height: 'auto' });

});

// Personalization section

var imgs=["video","Augmented Reality","minigames"];
var selected_img=0;

$("#previous_personalization").click(function() {
  selected_img--;
  if (selected_img<0) {
    selected_img=imgs.length-1;
  }
  $("#personalization_img").attr("src","images/personalization_"+imgs[selected_img]+".png");
  $("#personalization_text").text(imgs[selected_img]);
});

$("#next_personalization,#personalization_img").click(function() {
  selected_img++;
  if (selected_img>imgs.length-1) {
    selected_img=0;
  }
  $("#personalization_img").attr("src","images/personalization_"+imgs[selected_img]+".png");
  $("#personalization_text").text(imgs[selected_img]);
});

// Social featues section

$("#social_features2").mouseover(function() {
  if ($( window ).width() > 1024) {
    $("#social_features2").css({ width: '18vw', height: 'auto' });
    $("#social_features1").css({ width: '15vw', height: 'auto' });
  } else { // mobile
    $("#social_features2").css({ width: '70vw', height: 'auto' });
    $("#social_features1").css({ width: '60vw', height: 'auto' });
  }
});

$("#social_features2").mouseout(function() {
  if ($( window ).width() > 1024) {
    $("#social_features2").css({ width: '15vw', height: 'auto'});
    $("#social_features1").css({ width: '18vw', height: 'auto' });
  } else { // mobile
    $("#social_features2").css({ width: '60vw', height: 'auto'});
    $("#social_features1").css({ width: '70vw', height: 'auto' });
  }
});

$("#social_features4").mouseover(function() {
  if ($( window ).width() > 1024) {
    $("#social_features4").css({ width: '18vw', height: 'auto' });
    $("#social_features3").css({ width: '15vw', height: 'auto' });
  } else { // mobile
    $("#social_features4").css({ width: '70vw', height: 'auto' });
    $("#social_features3").css({ width: '60vw', height: 'auto' });
  }
});

$("#social_features4").mouseout(function() {
  if ($( window ).width() > 1024) {
    $("#social_features4").css({ width: '15vw', height: 'auto'});
    $("#social_features3").css({ width: '18vw', height: 'auto' });
  } else { // mobile
    $("#social_features4").css({ width: '60vw', height: 'auto'});
    $("#social_features3").css({ width: '70vw', height: 'auto' });
  }
});




$(document).ready(function() {
  $("#submit-form1").css("height", $("#halo-form1 .input-group").height());
  $("#submit-form1").css("width",  $("#halo-form1 .input-group").width()/3);
  $("#submit-form1").css("margin-left", -1 * $("#halo-form1 .input-group").width()/3.6);

  $("#submit-form2").css("height", $("#halo-form2 .input-group").height());
  $("#submit-form2").css("width",  $("#halo-form2 .input-group").width()/3);
  $("#submit-form2").css("margin-left", -1 * $("#halo-form2 .input-group").width()/4);

  if ($( window ).width() <= 1024) {
    $("#halo-form1 input[type=text]").css("font-size", '3.5vw');
    $("#submit-form1").css("font-size", '3.5vw');

    $("#halo-form2 input[type=text]").css("font-size", '3.5vw');
    $("#submit-form2").css("font-size", '3.5vw');
  }

});