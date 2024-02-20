// Initialization for ES Users
// import { Dropdown, initMDB } from "mdb-ui-kit";

// initMDB({ Dropdown });


// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });



$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    });