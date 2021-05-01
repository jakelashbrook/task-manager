$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "dd mmmm yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: { 
            done: "Select"
            // i18n is the abbreviation for internationalization and localization 
        }
    });
  });


        