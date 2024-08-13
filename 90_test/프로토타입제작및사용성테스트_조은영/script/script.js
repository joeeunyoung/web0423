$(function(){

    $('#wrap').fullpage({
        // menu: '#home_nav',
        // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

        sectionsColor: ['#f2f2f2', '#F0EEEA', '#7BAABE', 'whitesmoke'],

        // navigation: false(기본값),오른쪽에 있는 인디케이터
        navigation: true,
        navigationTooltips: ['Home', 'Best', 'Favorite', 'new'],
        // showActiveTooltip: true,
        //slidesNavigation: true,
        //loopHorizontal: false,
    });
});

// 문서가 준비되면;
$(function () {

    $('.slider').bxSlider({

        autoControls: false,

        auto: true,

    });

}); // document.readay()


window.addEventListener("DOMContentLoaded", function () {

    // 요소 찾기
    const btn1 = document.querySelectorAll('#tabs a').item(0);
    const btn2 = document.querySelectorAll('#tabs a').item(1);
    const btn3 = document.querySelectorAll('#tabs a').item(2);
    const btn4 = document.querySelectorAll('#tabs a').item(3);
    // console.log(btn1,btn2,btn3,btn4);

    const cont1 = document.querySelector('#tab1');
    // console.log(cont1);
    const cont2 = document.querySelector('#tab2');
    const cont3 = document.querySelector('#tab3');
    const cont4 = document.querySelector('#tab4');

    // 이벤트 처리
    btn1.onclick = function (e) {
        e.preventDefault();
        resetF();
        cont1.classList.add('on');
    }
    btn2.onclick = function (e) {
        e.preventDefault();
        resetF();
        cont2.classList.add('on');
    }
    btn3.onclick = function (e) {
        e.preventDefault();
        resetF();
        cont3.classList.add('on');
    }
    btn4.onclick = function (e) {
        e.preventDefault();
        resetF();
        cont4.classList.add('on');
    }

    function resetF() {
        cont1.classList.remove('on');
        cont2.classList.remove('on');
        cont3.classList.remove('on');
        cont4.classList.remove('on');
    }

});