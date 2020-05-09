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

$(".img-giftcard").mouseover(function() {
    $(this).css({ width: '100%', height: 'auto' });
});

$(".img-giftcard").mouseout(function() {
    $(this).css({ width: '75%', height: 'auto' });
});

// $.ajax({
//     type: "GET",
//     url: "/api/rooms",
//     success: function (rooms) { 

//     }
// });