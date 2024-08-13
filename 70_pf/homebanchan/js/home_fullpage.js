// Section Common Layout
// jQ home fullpage.js 

// (document).ready 생략가능
// $(document).ready(function()

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