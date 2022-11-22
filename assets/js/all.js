"use strict";

$(function () {
  $(".navBar").hide();
  $(".fa-bars").click(function () {
    $(".fa-bars").toggleClass('fa-xmark');
    $(".navBar").slideToggle();
  });
});
//# sourceMappingURL=all.js.map
