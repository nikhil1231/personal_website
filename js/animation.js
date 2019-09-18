AOS.init();

$(document).ready(() => {
    hasAnimated = false;
    $(window).scroll(function() {
        var hT = $('.count-up').offset().top,
            hH = $('.count-up').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && !hasAnimated){
            hasAnimated = true
            // Count up test scores
            $('.count-up').each(function() {
                var $this = $(this),
                    countTo = $this.attr('count-to');
                
                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing:'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    });

    
})
