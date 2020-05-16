var r;

if (window.XMLHttpRequest) {
    r = new XMLHttpRequest();

} else {
    r = new ActiveXObject('Microsoft.XMLHTTP');
}

r.open('GET', 'data.json');

r.onreadystatechange = function () {
    if (r.status === 200 && r.readyState === 4) {
        var output = '';

        for (var i = 0; i <= data.courses.length; i++) {
            for (key in data.courses[i]) {
                if (data.courses[i].hasOwnProperty(key)) {
                    output += '<li>' + '<a href="' + data.courses[key] + '">' + key + '</a></li>';
                }
            }
        }
    }
}; // ready state event handler

var update = document.getElementById('social');

update.innerHTML = output.toUpperCase(update);

