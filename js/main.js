//툴팁
tippy('#tooltip', {
    content: "Copy Email!",
    placement: 'top',
    theme: 'purple',
  });


//이메일 복사  
document.querySelector('.copy').addEventListener("click", function() {
  var tempElem = document.createElement('textarea');
  tempElem.value = 'minji2238@naver.com';  
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand(".copy");
  document.body.removeChild(tempElem);
});

//스크롤하면 나타나는 이벤트
const controller = new ScrollMagic.Controller();

const revealElements = document.querySelectorAll('.s-event');
revealElements.forEach(function (revealElement) {
    new ScrollMagic
    .Scene ({
        triggerElement: revealElement,
        offset: 50,	
        triggerHook: .9
    })
    .setClassToggle(revealElement, "visible") 
    .addTo(controller);
})