// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var remainder = function(number1, number2) {
  return number1 % number2;
};

var divided = function(number1, number2) {
  return number1 / number2;
};

var exponent = function(number1, number2) {
  return number1 ** number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });


  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });
  $("form#divided").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divided1").val());
    var number2 = parseInt($("#divided2").val());
    var result = divided(number1, number2);
    $("#output4").text(result);
  });

  $("form#remainder").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#remainder1").val());
    var number2 = parseInt($("#remainder2").val());
    var result = remainder(number1, number2);
    $("#output5").text(result);
  });
  $("form#exponent").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#exponent1").val());
    var number2 = parseInt($("#exponent2").val());
    var result = exponent(number1, number2);
    $("#output6").text(result);
  });
});
