// 时间变化
window.onload = function t() {
    let date = new Date();
    let fuller = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = `${fuller}/${month}/${day} ${hours}:${minutes} ${seconds}`;

    let span = document.querySelector('.date_text');
    span.innerHTML = time;

    setInterval(function() {
        t();
    }, 1000);
};

// 我的当当滑过显示
var orderFrom = document.querySelector('#dd_menu_top_down');
myddang_show = function(event) {
    orderFrom.style.display = 'block';
}
myddang_hidden = function(event) {
    orderFrom.style.display = 'none';
}