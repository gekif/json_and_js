$(function () {
    $.getJSON('data.json', function (data) {
        var template = $('#carimagestemplate').html();
        var html = Mustache.to_html(template, data);

        $('.carimages').html(html);

    });
});