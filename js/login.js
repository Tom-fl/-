let email = document.querySelector('#email');
let pwd = document.querySelector('#pwd');
let btn = document.querySelector('#btn');
emailFocus = function(e) {
    // let myregEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;


    // 开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合。
    let myregEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!myregEmail.test(email.value)) {
        alert('请输入邮箱！');
        email.value = null;
        return
    }
}
pwdFocus = function(e) {
    let myregPwd = /[0-9]{6,15}/;
    if (!myregPwd.test(pwd.value)) {
        alert('请输入pwd！');
        e.preventDefault();
        pwd.value = null;
    }
}
btn.onclick = function(e) {
    e.preventDefault();
    console.log(email.value == '');
    console.log(pwd.value == '');
    if (email.value == '') {
        e.preventDefault();
        alert('请输入');
    } else if (pwd.value == '') {
        e.preventDefault();
        alert('请输入');
    } else {
        console.log('a');
        e.preventDefault();
        window.location.href = 'index.html';
    }
}
jump = function() {
    window.location.href = 'register.html';
}