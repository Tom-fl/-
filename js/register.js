function register() {
    var email = document.querySelector('#email');
    var nickName = document.querySelector('#nickName');
    var pwd = document.querySelector('#pwd');
    var repwd = document.querySelector('#repwd');
    // checked
    var gender = document.querySelectorAll('.gender');
    var man = document.querySelector('#man');
    var woman = document.querySelector('#woman');

    // 开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合。
    var myregEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

    var myregNickName = /^[a-zA-Z0-9_-]{4,16}$/;
    var myregPwd = /[0-9]{6,15}/;

    var city = document.querySelector('#city').children;

    emailBlur = function() {
        if (!myregEmail.test(email.value)) {
            // alert('请输入pwd！');
            email.value = null;
            return
        }
    };
    nickNameBlur = function() {
        if (!myregNickName.test(nickName.value)) {
            // alert('请输入pwd！');
            nickName.value = null;
            return
        }
    };
    pwdBlur = function() {
        if (!myregPwd.test(pwd.value)) {
            // alert('请输入pwd！');
            pwd.value = null;
            return
        }
    };
    repwdBlur = function() {
        if (!(repwd.value == pwd.value)) {
            alert('密码不对');
            repwd.value = null;
            return
        }

    };
    for (let i = 0; i < gender.length; i++) {
        gender[i].onclick = function() {
            gender[i].setAttribute('checked', 'true');
        }
    }
    btn = function(e) {
        if (email.value == '' || nickName.value == '' || repwd.value == '') {
            alert('重新输入xxx');
        } else if (man.getAttribute('checked') == null && woman.getAttribute('checked') == null) {
            alert('请选择性别!');
        } else if (city.length < 4) {
            alert('请选择城市');
        } else {
            window.location.href = 'login.html'
        }

    }
    menu();
}




function menu() {
    var cities = new Array(3);
    cities[0] = new Array("武汉市", "黄冈市", "襄阳市", "荆州市");
    cities[1] = new Array("长沙市", "郴州市", "株洲市", "岳阳市");
    cities[2] = new Array("石家庄市", "邯郸市", "廊坊市", "保定市");
    cities[3] = new Array("郑州市", "洛阳市", "开封市", "安阳市");

    changeCity = function(val) {
        var c = document.querySelector('#city');
        c.options.length = 0;
        for (var i = 0; i < cities.length; i++) {
            if (val == i) {
                for (var j = 0; j < cities[i].length; j++) {
                    var op = document.createElement('option');
                    op.innerHTML = cities[i][j];
                    c.appendChild(op);
                }
            }
        }
    }
}
menu();
register();