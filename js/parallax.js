$(document).ready(function(){
	$(window).scroll(function(){ // para acceder al scroll de la ventana
		var windowWidth = $(window).width(); // obtenemos nuestro ancho de ventana
		if (windowWidth > 800){ // aplicamos efecto si el ancho es menor a 800px
			var scroll = $(window).scrollTop(); // obtenems el valor del scroll de la ventana hacia arriba

			$('header .textos').css({ //accedemos a los textos
				'transform': 'translate(0px,' + scroll / 2 + '%)' // le aplicamos estilos css
			});	// un translate de 0px hacia los lados y luego concatenamos con javascript para que el scroll
				// se divida en dos cada vez que subimos.

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)' // colocamos - para que valla de abajo hacia arriba
			});
		}
	});

		// funcion para reiniciar valores si cambia de tamaño la ventana
	$(window).resize(function(){ // resize reinicia nuestra ventana
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
					'transform': 'translate(0px, 0px)'
			});
		}
	});
});