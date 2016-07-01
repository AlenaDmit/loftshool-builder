'use strict';

 $(document).ready(function () {



      $('.button').on('click', function (e) {
          $('#fl').toggleClass('flip');
          $('.button').css({'opacity':0,'visibility':'hidden'});
      });
      $(document).on('click', function (e) {
          if ($(e.target).is('#good,#form,#sub,radio-1,radio-2,check, .button') === false) {
              $('#fl').removeClass('flip');
              $('.button').css({'opacity':1,'visibility':'visible'});
          }
      });

  });

 $(document).ready(function () {
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

});