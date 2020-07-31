$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "about.txt", success: function(result){
                $("#div1").html(result);
            }});
    });
});





