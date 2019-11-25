 $(document).ready(function() {

$("p").mouseover(function(){
  $("p").css("background-color", "white");
});

$("p").mouseleave(function(){
      $("p").css("background-color", "yellow");
   });



   $("footer").mouseover(function(){
      $("footer").css("display", "none");

   }); //mouse over

   $("footer").mouseleave(function(){
      $("footer").css("display", "block");
   });
 
    $("button").click(function(){
         //console.log("Does this work when i click?");
         //$("div").animate({left: '250px'});
         console.log("Still working?");

            $("button").css("background-color", "green");


   });

   //hide the dog catcher by default on page start
      $(".instructions").hide();

      var hideStatus = false;

 
        //SHOW AND HIDE EVENTS
        $(".ingredients").on("click", function() {


          // if true
          if(hideStatus == false){
              console.log("Just ingredients");

              $(".instructions").show();

              hideStatus = true;
          } 
          else{
             console.log("show instructions!");

              $(".instructions").hide();
              hideStatus = false;
          }


      });

   console.log("addText is online");

   $(".addText").on("click", function() {
      
      var textToAdd = prompt("What did you think?");

      $(".userText").html(textToAdd);




   });
 });



