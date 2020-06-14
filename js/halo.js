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
      //   so we print "Submitted!" as soon as they click and disable form on success
      $("#halo-form1 :input").prop("disabled", true);
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
      //   so we print "Submitted!" as soon as they click and disable form on success
      $("#halo-form2 :input").prop("disabled", true);
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

$("#next_personalization").click(function() {
  selected_img++;
  if (selected_img>imgs.length-1) {
    selected_img=0;
  }
  $("#personalization_img").attr("src","images/personalization_"+imgs[selected_img]+".png");
  $("#personalization_text").text(imgs[selected_img]);
});

// Social featues section

$("#social_features2").mouseover(function() {
    $("#social_features2").css({ width: '18vw', height: 'auto' });
    $("#social_features1").css({ width: '15vw', height: 'auto' });
});

$("#social_features2").mouseout(function() {
    $("#social_features2").css({ width: '15vw', height: 'auto'});
    $("#social_features1").css({ width: '18vw', height: 'auto' });
});

$("#social_features4").mouseover(function() {
    $("#social_features4").css({ width: '18vw', height: 'auto' });
    $("#social_features3").css({ width: '15vw', height: 'auto' });
});

$("#social_features4").mouseout(function() {
    $("#social_features4").css({ width: '15vw', height: 'auto'});
    $("#social_features3").css({ width: '18vw', height: 'auto' });
});
