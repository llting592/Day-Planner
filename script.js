$(setPlanner);
moment();

function setPlanner(){
    $("#currentDay").text(moment().format("h:mm dddd, MMM Do, YYYY "));
    
    colorTimeBlock();
    setInterval(colorTimeBlock, 1000);

    $(".timeBlock").each(function(){
        var Id = $(this).attr("id");
        $("#" + Id + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + Id));

    });

    $(".saveBtn").on("click", savePlan);

}

function savePlan(event){
    var hour = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hour, $("#" + hour + " textarea").val());
}

function colorTimeBlock(){
    $(".timeBlock").each(function(){
        var hourBlock = parseInt($(this).attr("id").replace("hour-", ""));
        var currentTime =  parseInt(moment().format("H"));
        $(this).removeClass("past", "present", "future");
        if (hourBlock < currentTime) {
            $(this).addClass("past");
          } else if (hourBlock > currentTime) {
            $(this).addClass("future");
          } else {
            $(this).addClass("present");
          }
    });
}

