sum = 1
setInterval(function() {
    var img = document.querySelector('#dd_scroll');
    if (sum < 7) {
        img.src = `images/dd_scroll_${sum++}.jpg`
    }
    if (sum == 7) {
        sum = 1
    }
}, 500)



// function init() {
//     // 轮播
//     // set();
//     // 广告定位
//     fixed();
//     // 文字滚动
//     // textRoll();
//     // tab切换
//     tabToggle();
// }

// let scroll = document.querySelector('.scroll_mid');


// let textRollUl = document.querySelector('#express');
// let textRollUlLi = document.querySelector('#express>li');
// let roll = 1;

// var timer = null;
// var sum = 1;

//     // let img = document.querySelector('#dd_scroll');
//     // let sum = 1;

// // function set() {
// //     if (sum < 6) {
// //         img.src = `images/dd_scroll_${sum++}.jpg`;
// //         console.log(sum);
// //     } else {
// //         sum = 1;
// //         Ftime()
// //     }
// // };

// // function Ftime() {
// //     clearInterval(timer)
// //     timer = setInterval(function() {
// //         set();
// //     }, 500)
// // }
// // Ftime()


// // loopShow = function(e) {
// //     let img = document.querySelector('#dd_scroll');
// //     img.src = `images/dd_scroll_${e}.jpg`;
// // }

// // scroll.onmouseover = function() {
// //     clearInterval(timer);
// // }
// // scroll.onmouseout = function() {
// //     timer = setInterval()
// // }




// function fixed() {
//     var close = document.querySelector('#dd_close');
//     var r = document.querySelector('#right');
//     close = onscroll = function() {
//         console.log(window.pageYOffset);
//         r.style = `top:${window.pageYOffset+150}px`
//     };


// }
// var close = document.querySelector('#dd_close');
// var right = document.querySelector('#right');

// // 点击关闭消失



// function textRoll() {
//     rollStp = setInterval(function() {
//         roll++;
//         textRollUl.style.transform = `translateY(-${roll}px)`;

//         if (roll >= 500) {
//             roll = 1;
//             clearInterval(rollStp);
//             textRoll();
//         }
//     }, 10);
// };





// function tabToggle() {
//     var tab = document.querySelector('.book_class').children;
//     bookPutUp = function(e) {
//         for (var j = 0; j < tab.length; j++) {
//             tab[j].className = "hide";
//         }
//         tab[e].className = 'show';
//     }
// }

// // init();

// // window.open("open.html", "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=500, height=500");