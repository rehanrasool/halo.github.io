var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzO2mre_cAFsawoaK8i2pWyDTZeODYiakRXr78O_aDZMTj7Lg/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function (rooms) { 
      alert("Thank you for showing interest in Halo! We will keep you updated!");
    }
  });
})

// Real gifts section

$(".img-giftcard").mouseover(function() {
    $(this).css({ width: '100%', height: 'auto' });
});

$(".img-giftcard").mouseout(function() {
    $(this).css({ width: '75%', height: 'auto' });
});

// Personalization section

var imgs=["video","AR","minigames"];
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
    $("#social_features2").css({ width: '50%', height: 'auto' });
    $("#social_features1").css({ width: '45%', height: 'auto' });
});

$("#social_features2").mouseout(function() {
    $("#social_features2").css({ width: '45%', height: 'auto'});
    $("#social_features1").css({ width: '50%', height: 'auto' });
});
