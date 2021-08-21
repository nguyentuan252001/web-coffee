// $(document).ready(
//     function() {
//         $('.container__discover').waypoint(
//             function(direction) {
//                 if(direction == "down") {
//                     $('header').addClass('scroll');
//                 }else {
//                     $('header').removeClass('scroll');
//                 }
//             }, {
//                 offset: '100px'
//             }
//         )
//     }
// )

var waypoint = new Waypoint({
    element: document.getElementsByClassName('container'),
    handler: function (direction) {
        if (direction == "down") {
           document.querySelector('.header').classList.add('scroll');
        } else {
            document.querySelector('.header').classList.remove('scroll');
        }
    },
    offset: -50
})