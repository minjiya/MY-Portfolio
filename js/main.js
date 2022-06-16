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