//User interface (front-end) logic
$(document).ready(function() {
  $('#quiz').submit(function(event){
      event.preventDefault();
        var value1 = parseInt($("[name=answer1]:checked").val());
        var value2= parseInt($("[name=answer2]:checked").val());
        var value3= parseInt($("[name=answer3]:checked").val());
        var value4= parseInt($("[name=answer4]:checked").val());
        var value5= parseInt($("[name=answer5]:checked").val());
        var value6= parseInt($("[name=answer6]:checked").val());
        var value7= parseInt($("[name=answer7]:checked").val());
        var value8= parseInt($("[name=answer8]:checked").val());
        var value9= parseInt($("[name=answer9]:checked").val());
        var value10= parseInt($("[name=answer10]:checked").val());


      var result = parseInt(value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10);
      if (result > 80) {
        $("#output").text("Your score is: " + result  +     " Congratulations. You have passed the test excellently!!");
      }
      else if (result >= 50 && result <=80) {
        $("#output").text("Your score is: " + result  +    " You have passed the test fairly.");
      }
      else { (result < 50)
        $("#output").text("Your score is: " + result  +  " You have scored poorly. You need to retake the test.");
      }
  });
});
