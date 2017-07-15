$(document).ready(function() {
          $("#slider").slider({
              animate: true,
              value:1,
              min: 0,
              max: 1000,
              step: 10,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });

          $("#slider2").slider({
              animate: true,
              value:0,
              min: 0,
              max: 500,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#amount").val(0);
          $("#currSavings").val(0);
          $("#amount-label").text(0);
          $("#currSavings-label").text(0);

          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();
        var $currSavings = slider == 2?val:$("#currSavings").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $currSavings = $( "#slider2" ).slider( "value" );
         */

         $total = "$" + ($amount * $currSavings);
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#currSavings" ).val($currSavings);
         $( "#currSavings-label" ).text($currSavings);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$duration+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
      }
