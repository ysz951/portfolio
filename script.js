
function goAbout() {
    $('.about_nav').on('click', function(){
        $('html, body').animate({
        scrollTop: $("#About").offset().top
    }, 500);
    })
    
}

function openMenu() {
    $('.menu_btn').on('click', function(){
        $('.header_name_menu').css("margin-bottom", 0);
        $('.header_nav').removeClass('hidden');
        $('.menu_btn').addClass('hidden')
        $('.close_menu_btn').removeClass('hidden');
    })
}

function closeMenu() {
    $('.close_menu_btn').on('click', function(){
        $('.header_name_menu').css("margin-bottom", "20px");
        $('.header_nav').addClass('hidden');
        $('.menu_btn').removeClass('hidden')
        $('.close_menu_btn').addClass('hidden');
    })
}

function goProject() {
    $('.project_nav').on('click', function(){
        $('html, body').animate({
            scrollTop: $("#Project").offset().top - 50
        }, 500);
    })
    
}

function goContact() {
    $('.contact_nav').on('click', function(){
        $('html, body').animate({
        scrollTop: $(".site-footer").offset().top - 50
    }, 500);
    })   
}

function viewport() {
    $( window ).resize(function() {
        if($(window).width() < 800) {
            $('.header_name_menu').css("margin-bottom", "20px");
        }
        else {
            $('.header_name_menu').css("margin-bottom", "0");
        }
    })
    
}

 // main function
function mainFunc(){
    goAbout();
    goProject();
    goContact();
    openMenu();
    closeMenu();
    viewport();
  }
  
  $(mainFunc);