let futureDay = 31,
    futureHour = 24,
    futureMinute = 59,
    futureSecond = 59,
    myDate,
    characterNumber = 100;

$(".opened").slideDown();
$(".toggleInner").not(".opened").slideUp();

$(".openMenu").click(function () {
    $("#list-example").animate({ left: "0" });
    $(".openMenu").animate({ marginLeft: "250px" });
});

$(".closeIcon .icon").click(function () {
    $("#list-example").animate({ left: "-250px" });
    $(".openMenu").animate({ marginLeft: "0" });
});

$(".toggleBtn").click(function () {
    $(".toggleInner").slideUp();
    if ($(this).next().css("display") == "none") {
        $(this).next().slideDown();
    } else {
        $(this).next().slideUp();
    }
});



let myInterval = setInterval(function () {
    myDate = new Date();
    $(".card-body .card-title.day").html(futureDay - myDate.getDate());
    $(".card-body .card-title.hour").html(futureHour - myDate.getHours());
    $(".card-body .card-title.minute").html(futureMinute - myDate.getMinutes());
    $(".card-body .card-title.second").html(futureSecond - myDate.getSeconds());

    if (myDate.getDate() == futureDay && myDate.getHours() == futureHour && myDate.getMinutes() == futureMinute && myDate.getSeconds() == futureSecond) {
        clearInterval(myInterval);
    }
}, 1000);



$("span.characterNumber").html(characterNumber);

$(".form-control.myMessage").keyup(function () {
    if ($("span.characterNumber").html() > 0) {
        $("span.characterNumber").html(characterNumber - $(".form-control.myMessage").val().length);
    }
    if ($("span.characterNumber").html() == 0) {
        console.log('=0');
        $("h5.characterLimit").html("You exceeded your character limit!").css("color", "red");
        $(".form-control.myMessage").prop('disabled', true);
    }
});