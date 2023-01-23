/*jshint esversion: 9 */
(function($) {

    skel
        .breakpoints({
            xlarge: '(max-width : 1680px)',
            large : '(max-width : 1280px)',
            medium: '(max-width : 980px)' ,
            small : '(max-width : 736px)' ,
            vsmall: '(max-height: 575px)',
            xsmall: '(max-width : 480px)'
        });

    var $window  = $(window),
        $body    = $('body'),
        $wrapper = $('#page-wrapper'),
        $banner  = $('#banner'),
        $header  = $('#header');

    // Disable animations/transitions until the page has loaded.
    //$body.addClass('is-loading');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-loading');
        }, 100);
    });

    // Mobile?
    if (skel.vars.mobile)
        $body.addClass('is-mobile');
    else
        skel
            .on('-medium !medium', function() {
                $body.removeClass('is-mobile');
            })
            .on('+medium', function() {
                $body.addClass('is-mobile');
            });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
        $.prioritize(
            '.important\\28 medium\\29',
            skel.breakpoint('medium').active
        );
    });

    // Scrolly.
    $('.scrolly')
        .scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });

    // Menu.
    $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'menu-visible'
        });

    // Header.
    if (skel.vars.IEVersion < 9)
        $header.removeClass('alt');

    if ($banner.length > 0
    &&  $header.hasClass('alt')) {

        $window.on('resize', function() { $window.trigger('scroll'); });

        $banner.scrollex({
            bottom:     $header.outerHeight() + 1,
            terminate:  function() { $header.removeClass('alt'); },
            enter:      function() { $header.addClass('alt'); },
            leave:      function() { $header.removeClass('alt'); }
        });

    }

    // electric menu

    // get menu items array
    let menu_items = $('#menu_ul li');
    // animation time in seconds
    const animation_time = 1;

    function calc_forward_time(index)
    {
        return index * animation_time;
    }

    function calc_backward_time(index)
    {
        return (menu_items.length - index) * animation_time;
    }

    function calc_forward_delay(index)
    {
        return (menu_items.length + 1) * (animation_time * 1000);
    }

    function calc_backward_delay(index)
    {
        return menu_items.length * (animation_time * 1000);
    }

    function animation(index)
    {
        if ((index + 1) % 2 == 0)
        {
            jQuery(menu_items[index]).css({
                'animation': 'conduit-current-bottom-left ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-moz-animation': 'conduit-current-bottom-left ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-webkit-animation': 'conduit-current-bottom-left ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-ms-animation': 'conduit-current-bottom-left ' + animation_time + 's ' + calc_forward_time(index) + 's linear none'
            });
        }
        else
        {
            jQuery(menu_items[index]).css({
                'animation': 'conduit-current-bottom-right ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-moz-animation': 'conduit-current-bottom-right ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-webkit-animation': 'conduit-current-bottom-right ' + animation_time + 's ' + calc_forward_time(index) + 's linear none',
                '-ms-animation': 'conduit-current-bottom-right ' + animation_time + 's ' + calc_forward_time(index) + 's linear none'
            });
        }

        setTimeout(reverse_animation, calc_backward_delay(index), index);
    }

    function reverse_animation(index)
    {
        if ((index + 1) % 2 == 0)
        {
            jQuery(menu_items[index]).css({
                'animation': 'conduit-current-right-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-moz-animation': 'conduit-current-right-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-webkit-animation': 'conduit-current-right-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-ms-animation': 'conduit-current-right-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none'
            });
        }
        else
        {
            jQuery(menu_items[index]).css({
                'animation': 'conduit-current-left-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-moz-animation': 'conduit-current-left-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-webkit-animation': 'conduit-current-left-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none',
                '-ms-animation': 'conduit-current-left-top ' + animation_time + 's ' + calc_backward_time(index) + 's linear none'
            });
        }

        setTimeout(animation, calc_forward_delay(index), index);
    }

    for (let i = 0; i < menu_items.length; ++i)
    {
        animation(i);
    }

})(jQuery);