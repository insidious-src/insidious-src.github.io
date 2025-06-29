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
            speed: 3000,
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
    let jump_menu_items = $('#jump_menu_ul li');
    // animation time in seconds
    const animation_time = 1.5;

    function animation_string(animation_name)
    {
        return animation_name + ' ' + animation_time + 's 0s linear none';
    }

    function play_electric_animation_forward(items, index)
    {
        if (0 <= index && index < items.length)
        {
            if ((index + 1) % 2 == 0)
            {
                jQuery(items[index]).css({
                    'animation': animation_string('conduit-current-bottom-left'),
                    '-moz-animation': animation_string('conduit-current-bottom-left'),
                    '-webkit-animation': animation_string('conduit-current-bottom-left'),
                    '-ms-animation': animation_string('conduit-current-bottom-left')
                });
            }
            else
            {
                jQuery(items[index]).css({
                    'animation': animation_string('conduit-current-bottom-right'),
                    '-moz-animation': animation_string('conduit-current-bottom-right'),
                    '-webkit-animation': animation_string('conduit-current-bottom-right'),
                    '-ms-animation': animation_string('conduit-current-bottom-right')
                });
            }

            setTimeout(play_electric_animation_forward, animation_time * 1000, items, ++index);
        }
        else
        {
            setTimeout(play_electric_animation_backward, animation_time * 1000, items, --index);
        }
    }

    function play_electric_animation_backward(items, index)
    {
        if (0 <= index)
        {
            if ((index + 1) % 2 == 0)
            {
                jQuery(items[index]).css({
                    'animation': animation_string('conduit-current-right-top'),
                    '-moz-animation': animation_string('conduit-current-right-top'),
                    '-webkit-animation': animation_string('conduit-current-right-top'),
                    '-ms-animation': animation_string('conduit-current-right-top')
                });
            }
            else
            {
                jQuery(items[index]).css({
                    'animation': animation_string('conduit-current-left-top'),
                    '-moz-animation': animation_string('conduit-current-left-top'),
                    '-webkit-animation': animation_string('conduit-current-left-top'),
                    '-ms-animation': animation_string('conduit-current-left-top')
                });
            }

            setTimeout(play_electric_animation_backward, animation_time * 1000, items, --index);
        }
        else
        {
            play_electric_animation_forward(items, ++index);
        }
    }

    if (menu_items.length > 0) play_electric_animation_forward(menu_items, 0);
    if (jump_menu_items.length > 0) play_electric_animation_forward(jump_menu_items, 0);

})(jQuery);