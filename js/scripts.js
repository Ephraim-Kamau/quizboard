$(document).ready(function() {
  $('#quiz').submit(function(event){
    event.preventDefault();
    var value1 = parseInt($("[name=answer1]:checked").val());
    var value2= parseInt($("[name=answer2]:checked").val());
    $("#output").text("Your score is : " + (value1 + value2));
  });
});
