// ============================
// Menu toggle accessibility
// ============================
// Sets up ARIA attributes and keyboard support for the responsive menu
function setupMenuToggleAccessibility() {
    var $menuBtn = $('#menu-btn'); // The hidden checkbox controlling menu visibility
    var $menuLabel = $('label[for="menu-btn"]'); // The visible label styled as a hamburger icon

    if ($menuBtn.length && $menuLabel.length) {
        // Set the initial aria-expanded value based on checkbox state
        $menuBtn.attr('aria-expanded', $menuBtn.prop('checked'));

        // Update aria-expanded whenever the menu button is toggled
        $menuBtn.on('change', function () {
            $menuBtn.attr('aria-expanded', $menuBtn.prop('checked'));
        });

        // Allow toggling the menu with keyboard (Enter or Space on label)
        $menuLabel.on('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent page from scrolling on Space
                $menuBtn.prop('checked', !$menuBtn.prop('checked')).trigger('change');
            }
        });

        // Make sure the label is focusable for keyboard users
        $menuLabel.attr('tabindex', '0');
    }
}

// ============================
// Scroll effects
// ============================
// Handles sticky header and fading in captions on scroll
function setupScrollAnimations() {
    function onScroll() {
        var $header = $("header");

        // Make header sticky when user scrolls down
        if ($(window).scrollTop() > 0) {
            $header.addClass("sticky");
        } else {
            $header.removeClass("sticky");
        }

        // Show captions with fade effect when they are in viewport
        $('.caption').each(function () {
            var $caption = $(this);
            var objectTop = $caption.offset().top;
            var objectBottom = objectTop + $caption.outerHeight();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).innerHeight();

            if (objectBottom > windowTop && objectTop < windowBottom) {
                if (!$caption.hasClass('visible')) {
                    $caption.stop(true).fadeTo(500, 1).addClass('visible');
                }
            } else {
                if ($caption.hasClass('visible')) {
                    $caption.stop(true).fadeTo(500, 0).removeClass('visible');
                }
            }
        });
    }

    // Run once on load
    onScroll();

    // Run again every time the user scrolls
    $(window).on('scroll', onScroll);
}

// ============================
// Initialize everything on load
// ============================
$(window).on("load", function () {
    setupMenuToggleAccessibility();
    setupScrollAnimations();
});