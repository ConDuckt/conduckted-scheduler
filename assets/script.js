var currentTimeCheck = dayjs().format("HH");
var saveBtn = $(".saveBtn");

$("header").append(dayjs().format("dddd, MMMM D, YYYY"));

$(".time-block").each(function () {

    var timeBlock = $(this).attr("id");
    var savedData = localStorage.getItem(timeBlock);

    $(this).find(".description").val(savedData);
});

$(".time-block").each(function () {
    var timeBlock = $(this).attr("id");

    if (timeBlock > currentTimeCheck) {
        $(this).addClass("future");
    } else if (timeBlock === currentTimeCheck) {
        $(this).addClass("present");
    } else if (timeBlock < currentTimeCheck) {
        $(this).addClass("past");
    }
});

$(saveBtn).click(function() {
    var timeBlock = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();

localStorage.setItem(timeBlock, userInput);

});