$( document ).ready(function() {
    var $container = $('.steps-container');
    var startPos = 0;
    var index = 0;

    var $steps = $container.find('.step');

    for(var i=0;i<$steps.length;i++){
      console.log(i);
      if(i>0) var segment_height = ($($steps[i]).position().top + $($steps[i]).outerHeight()/2) - ($($steps[i-1]).position().top +  + $($steps[i-1]).outerHeight()/2);
      else{ var segment_height = $($steps[i]).position().top + $($steps[i]).outerHeight()/2;}

      $container.append('<div class="steps-track" id="segment-'+i+'" style="top:'+startPos+'px; height: '+segment_height+'px;"></div>');
      startPos = $($steps[i]).position().top + $($steps[i]).outerHeight()/2;

      if($($steps[i]).hasClass('step--completed') || $($steps[i]).hasClass('step--active') || $($steps[i]).hasClass('step--afterward')){
        $('#segment-'+i).css('background-color','#00c96f');
      }
    }

    startPos = $($steps[$steps.length-1]).position().top + $($steps[$steps.length-1]).outerHeight()/2;
    segment_height = $('.steps-container').outerHeight() - startPos;
    $container.append('<div class="steps-track" id="segment-'+$steps.length+'" style="top:'+startPos+'px; height: '+segment_height+'px;"></div>');

});
