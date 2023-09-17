console.log('main.js loaded');
let numberUnfollowEffect = document.getElementById('numberUnfollowEffect');
let numberFollowEffect = document.getElementById('numberFollowEffect')
let img_duck_dom =document.getElementById('img_duck');
let startX = 0;
let moveX = 0;

let unfollow = 0;
let follow = 0;

let text_unfollow_duck =document.getElementById('unfollow');
let text_follow_duck =document.getElementById('follow');

function swipe_action(direction) {
    img_duck_dom.classList.remove('animate-top');
    img_duck_dom.style.transition = 'transform 0.5s';
    img_duck_dom.style.transform = `translate(${direction * window.innerWidth}px, 0px) rotate(${90 * direction}deg)`;
    if (direction < 0 ){
        unfollow++;
        text_unfollow_duck.innerText = unfollow;

        numberUnfollowEffect.classList.add("plus-one")
        numberUnfollowEffect.innerText = "+1"
        numberUnfollowEffect.classList.remove("hidden")
        
        setTimeout(() => {
            numberUnfollowEffect.classList.remove("plus-one")
            numberUnfollowEffect.classList.add("hidden")
          }, 500)
    }  else {
        follow++;
        text_follow_duck.innerText = follow;

        numberFollowEffect.classList.add("plus-one")
        numberFollowEffect.innerText = "+1"
        numberFollowEffect.classList.remove("hidden")
        
        setTimeout(() => {
            numberFollowEffect.classList.remove("plus-one")
            numberFollowEffect.classList.add("hidden")
          }, 500)
    }
}

// function loadNew_picture() {
//     img_duck_dom.setAttribute('src', 'https://random-d.uk/api/randomimg');
//     img_duck_dom.onload = function() {
//         img_duck_dom.style.transition='';
//         img_duck_dom.style.transform='';
//         img_duck_dom.classList.add('animate-top');
//     };
    
// }

function loadNew_picture() {

    let uniqueTime = new Date().getTime();
    img_duck_dom.setAttribute('src', 'https://random-d.uk/api/randomimg?_=' + uniqueTime);
    img_duck_dom.onload = function() {
        img_duck_dom.style.transition = '';
        img_duck_dom.style.transform = '';
        img_duck_dom.classList.add('animate-top');
    };
}

img_duck_dom.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
    }
);

img_duck_dom.addEventListener('touchmove', function(event) {
        moveX = event.touches[0].clientX;
    }
);

// img_duck_dom.addEventListener('touchend', function(event) {
//         console.log(moveX - startX > 0 ? "swiped right" : "swiped left");
//         swipe_action(moveX - startX > 0 ? 1 : -1);
//         setTimeout(loadNew_picture, 500);
//     }
// );
//End

img_duck_dom.addEventListener('mousedown', function(event) {
    startX = event.clientX;
});

img_duck_dom.addEventListener('mousemove', function(event) {
    if (event.buttons == 1) { // Sadece sol tıklama durumunda hareketi izle
        moveX = event.clientX;
    }
});

img_duck_dom.addEventListener('touchend', swipeHandler);

img_duck_dom.addEventListener('mouseup', swipeHandler);

function swipeHandler(event) {
    console.log(moveX - startX > 0 ? "swiped right" : "swiped left");
    swipe_action(moveX - startX > 0 ? 1 : -1);
    setTimeout(loadNew_picture, 500);
}