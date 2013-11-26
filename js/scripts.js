$(document).ready(function(){

  $('.project-list').hover(function(){
    $('.project-list').toggleClass('show-projects');
  });

  $('.hamburger-click').click(function(){
    $('.page-header').toggleClass('exp-header');
  });
  
});