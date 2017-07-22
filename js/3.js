$(document).ready(function() {

  // initialise datepicker with today's date
  $("#date").datepicker("setDate", new Date);

  // initialise sliders
  $("#slider").slider({
    animate: true,
    value: 1,
    min: 0,
    max: 1000,
    step: 10,
    slide: function(event, ui) {
      update(1, ui.value);
    }
  });

  $("#slider2").slider({
    animate: true,
    value: 0,
    min: 0,
    max: 500,
    step: 1,
    slide: function(event, ui) {
      update(2, ui.value);
    }
  });

  // set totals
  $("#amount").val(0);
  $("#spend").val(0);
  $("#amount-label").text(0);
  $("#spend-label").text(0);

  update();

});

// ------------ functions ------------
function getGoal() {
  $('#goal').on('input', function() {
    goal = this.value;
    console.log(goal)
  });
}

function calculateWeeks() {
  // debugger;
  var today = new Date();
  var date = today;
  var weeks = 1;
  console.log('calc week init', weeks);

  $('#date').on('focusout', function() {

    date = $('#date').val();
    console.log('date', date);

    var newDate = new Date(date);
    console.log('date', date);

    var dif = Math.round(newDate - today);
    weeks = Math.round(dif/1000/60/60/24/7) + 1;

  });

  console.log('calc weeks', weeks);
  return weeks
}

function update(slider, val) {
  // Changed. Now, directly take value from ui.value. If not set (initial, will use current value.)
  var $amount = slider == 1 ? val : $("#amount").val();
  var $spend = slider == 2 ? val : $("#spend").val();

  var goal = getGoal();
  var weeks = calculateWeeks();

  console.log(weeks, 'weeks');

  $total = "$" + ($amount * $spend);
  $("#amount").val($amount);
  $("#amount-label").text($amount - $spend);
  $("#spend").val($spend);
  // TODO: spend amount needs to update dynamically according to goal and weeks value
  $("#spend-label").text(Math.ceil(($amount - $spend) / weeks));
  $("#total").val($total);
  $("#total-label").text($total);

  $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $amount + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
  $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $spend + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
