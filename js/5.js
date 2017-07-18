$(document).ready(function() {
  $("#slider").slider({
    animate: true,
    value: 1,
    min: 0,
    max: 20,
    step: 1,
    slide: function(event, ui) {
      update(1, ui.value); //changed
    }
  });

  // Added, set initial value.
  $("#cups").val(0);
  $("#permonth").val(0);
  $("#cups-label").text(0);
  $("#permonth-label").text(0);

  update();
});

// Changed. Now with parameter
function update(slider, val) {
  // Changed. Now, directly take value from ui.value. If not set (initial, will use current value.)
  var $cups = slider == 1 ? val : $("#cups").val();
  var $permonth = slider == 2 ? val : $("#permonth").val();

  $peryear = ($cups * 52);
  $("#cups").val($cups);
  $("#cups-label").text($cups * 5);
  $("#permonth").val($permonth);
  $("#permonth-label").text(Math.ceil($cups * 5 * 4.3));
  $("#peryear").val($peryear);
  $("#peryear-label").text($peryear);

  $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $cups + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
  $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $permonth + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
