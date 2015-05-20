(function ( window, document, $, undefined ) {
	
	function init() {
		setTimeout( function () {
			$('.word').has('.heart').addClass( 'pulse' );
		}, 2000);
	}

	$( document ).ready( init );
})( window, document, jQuery );