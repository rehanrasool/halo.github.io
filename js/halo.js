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

// $.ajax({
//     type: "GET",
//     url: "/api/rooms",
//     success: function (rooms) { 

//     }
// });