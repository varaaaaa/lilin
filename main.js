$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Hope all ur wishes can be come true yumnaa!!").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

