
function goAbout() {
    $('.about_nav').on('click', function(){
        $('html, body').animate({
        scrollTop: $("#About").offset().top
    }, 500);
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

 // main function
function mainFunc(){
    goAbout();
    goProject();
    goContact();
  }
  
  $(mainFunc);