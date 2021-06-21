/* jshint esversion: 6 */

// initialize materialize elements
$(document).ready(function() {
    $('.sidenav').sidenav({
        edge: "right"
    });
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
    $(("#print_button")).click(() => { 
        window.print();
    });
    $('.tabs').tabs();
});