var sum = 1;
setInterval(function() {
    var img = document.querySelector('#dd_scroll');
    if (sum < 7) {
        img.src = `images/dd_scroll_${sum++}.jpg`
    }
    if (sum == 7) {
        sum = 1
    }
}, 500)