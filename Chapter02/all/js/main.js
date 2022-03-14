// $(function () {
//     $('#typo').on('mouseover', function () {
//         $('#typo').css({
//             backgroundColor: 'black',
//             color: 'pink',
//         })
//     });
//     $('#typo').on('click', function () {
//         $('#typo').animate({
//             opacity: 0,
//             fontSize: '20px',
//             color: 'yellow',
//         }, 1500, 'swing',
//             function () {
//                 $('#typo').animate({
//                     opacity: 0,
//                     fontSize: '20px',
//                     color: 'yellow',
//                 });
//             });
//     });
//     $('#typo').on('mouseout', function () {
//         $('#typo').css({
//             backgroundColor: '',
//             color: '',
//         })
//     });
// });

$(function () {
    $('#typo').mouseover(function() {
        $('#typo').stop().animate({
            backgroundColor: '#eee',
        });
    })
    .mouseout(function() {
        $('#typo').stop().animate({
            backgroundColor: '',
        });
    });
});


let a = [1, 2, 3, 4, 5, 6];
let b = 0;

for (let i = 0; i < a.length; i++) {
    let num = a[i];

    if (num % 5 === 0) {
        break;
    } else if (num % 2 === 1) {
        console.log(num);
        continue;
    }
    b += num
}