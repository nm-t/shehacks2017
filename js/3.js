$(document).ready(function() {
  var goal = 0;

  $("#slider").slider({
    animate: true,
    value: 1,
    min: 0,
    max: 1000,
    step: 10,
    slide: function(event, ui) {
      update(1, ui.value); // Changed
    }
  });

  $("#slider2").slider({
    animate: true,
    value: 0,
    min: 0,
    max: 500,
    step: 1,
    slide: function(event, ui) {
      update(2, ui.value); // Changed
    }
  });

  // Added, set initial value.
  $("#amount").val(0);
  $("#spend").val(0);
  $("#amount-label").text(0);
  $("#spend-label").text(0);

  getGoal();
  // getDate();
  // getDateToday();
  update();
});


function getGoal() {
  $('#goal').on('input', function() {
    goal = this.value;
    console.log(goal);
  });
}

// TODO: Use Moment.js to work out duration and factor into calculations
// function getDate() {
//   var date = $('#date').val();
//   console.log(date);
// }
//
// function getDateToday() {
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth() + 1; // January is 0!
//   var yyyy = today.getFullYear();
//
//   if (dd < 10) {
//       dd = '0' + dd
//   }
//
//   if (mm < 10) {
//       mm = '0' + mm
//   }
//
//   today = mm + '/' + dd + '/' + yyyy;
//   console.log(today);
// }

// Changed. Now with parameter
function update(slider, val) {
  // Changed. Now, directly take value from ui.value. If not set (initial, will use current value.)
  var $amount = slider == 1 ? val : $("#amount").val();
  var $spend = slider == 2 ? val : $("#spend").val();

  $total = "$" + ($amount * $spend);
  $("#amount").val($amount);
  $("#amount-label").text($amount - $spend);
  $("#spend").val($spend);
  $("#spend-label").text(Math.ceil(($amount - $spend) / 5));
  $("#total").val($total);
  $("#total-label").text($total);

  $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $amount + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
  $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $spend + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
