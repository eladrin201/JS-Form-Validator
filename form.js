$( "#aptDate" ).datepicker();

function validateForm() {
  console.log("Starting validation");
  var name = $('#Name').val();
  var Name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var aptDate = $("#aptDate").val();
  var aptTime = $("#aptTime").val();
  var services = $("#services").val();
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var cleanRegex = /[A-za-z\. \-()]/gi;
  var phoneClean = phone.replace(cleanRegex, phone);
  var phoneRegex = /[0-9]{10,14}/;
  var aptTimeNil = "--";

  if (!Name) {
    showError("name");
  }else if (!email || !emailRegex.test(email)) {
    showError("email address");
  }else if (!phone || !phoneRegex.test(phoneClean)) {
    showError("phone number");
  }else if (!aptDate) {
    showError("appointment date");
  }else if(aptTime == aptTimeNil){
    showError("appointment time");
  }else if(!services){
    showError("service request");
  }else if(!name){
    $('form').submit();
    $("#error").addClass("hidden");
    console.log("Submitting...")
  }
}

function showError(error){
  console.log("Show error");
  $("#error").html("Please fill in a valid " + error + ". Thanks!");
  $("#error").removeClass("hidden");
}
