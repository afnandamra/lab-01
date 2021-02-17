'use strict'
let colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#A0C4FF', '#BDB2FF', '#9BF6FF', '#FFC6FF', '#f3ffc8'];
let divs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
function generateRandom() {
    let rand = colors[Math.floor(Math.random() * colors.length)];
    return rand;
}
$(() => {
    $(window).resize(() => {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function () {
            console.log('Resized finished.');
            if ($(window).width() >= 480 && $(window).width() <= 767) {
                divs.forEach(item => {
                    $(`#${item}`).css('backgroundColor', generateRandom());
                })
            } else if ($(window).width() >= 768) {
                divs.forEach(item => {
                    $(`#${item}`).css('backgroundColor', generateRandom());
                })
            } else {
                divs.forEach(item => {
                    $(`#${item}`).css('backgroundColor', generateRandom());
                })
            }
        }, 250);
    })
})