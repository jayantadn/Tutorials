/* skel-baseline v2.0.3 | (c) n33 | getskel.com | MIT licensed */

// Fix IE Bug
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
	$(document).ready(function() {
		$("body").css("display", "none");
		$("body").fadeIn(2000); });
}

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: 'http://www.excel-easy.com/css/style.css',
				containers: 917,
				grid: { gutters: ['2em', 30] }
			},
			medium: {
				media: '(max-width: 935px)',
				href: 'http://www.excel-easy.com/css/style-medium.css',
				containers: 604,
			},
			small: {
				media: '(max-width: 620px)',
				href: 'http://www.excel-easy.com/css/style-small.css',
				containers: '94%',
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'animate',
					speed: 600
				},
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-right',
					side: 'right',
					width: 200
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-right',
					side: 'top',
					width: 68
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

	});

})(jQuery);