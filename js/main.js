


// прелоадер

$(window).on('load', function () {
    $(".preloader_image").fadeOut(4500);
    $(".preloader").delay(3300).fadeOut("slow");
});

// бугрег
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});


// document.addEventListener('DOMContentLoaded', function(){
//   const form = document.getElementById('form');
//   form.addEventListener('submit' , formSend);
//   async function formSend(e) {
//     e.preventDefualt();
//     let error = formValidate(form);
//     let formData = FormData(form);
//     if (error === 0) {
//       let response = await fetch('sendmail.php', {
//         method: 'POST',
//         body: formData
//       });
// if(response.ok) {
//   let response = await response.json();
//   alert(result.massage);
//   formPreview.innerHTML = '';
//   form.reset();
// } else {
//  alert("error");
// }
//     } else {
//       alert("pfgjkybnt gjjkz");
//     }
//   }
// function formValidate(form) {
//   let error = 0;
//   let formReq = document.querySelectorAll('._req');
//
//   for (let index = 0; index < formReq.length; index++ ) {
//     const input = formReq[index];
//     formRemoveError(index);
//
//     if (input.classList.contains('_phone')){
//       if(phoneTest(input)) {
//         formAddError(input);
//         error++;
//       }
//     } else {
//       if  (input.value === '') {
//         formAddError(input);
//         error++;
//       }
//     }
//   }
// }
// function formAddError(input) {
//   input.parentElement.classList.add('_error');
//   input.classList.add('_error');
// }
// function formRemoveError(input) {
//   input.parentElement.classList.remove('_error');
//   input.classList.remove('_error');
// }
// function phoneTest(input) {
//   return /^\+d\{11)$/.test(input.value);
// }
//
// });
