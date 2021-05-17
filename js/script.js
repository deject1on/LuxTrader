// user-header-menu
let user_menu = document.querySelector('.user-header__menu');
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
	user_menu.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		user_menu.classList.remove('_active');
	}
});

// slider 1
new Swiper('.main-slider__body', {
	//стрелки
	navigation: {
		nextEl: '.control-main-slider__arrow_next',
		prevEl: '.control-main-slider__arrow_prev'
	},
	// курсос перетаскивания
	grabCursor: true,
	// бесконечный слайд
	loop: true,
});


// slider 2
new Swiper('.slider-lots__body', {
	//стрелки
	navigation: {
		nextEl: '.control-slider-lots__arrow_next',
		prevEl: '.control-slider-lots__arrow_prev'
	},
	// курсос перетаскивания
	grabCursor: true,
	// бесконечный слайд
	loop: true,
	// количество слайдов для показа
	slidesPerView: 3,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		670: {
			slidesPerView: 2,
		},
		860: {
			slidesPerView: 3,
		},
	},

});

// slider 3 
new Swiper('.slider-quotes', {
	//стрелки
	navigation: {
		nextEl: '.control-slider-quotes__circle',
	},
	// курсос перетаскивания
	grabCursor: true,
	// бесконечный слайд
	loop: true,
	// количество слайдов для показа
	slidesPerView: 1,

	effect: 'fade',
	fadeEffect: {
		// параллельная смена прозрачности
		crossFade: true
	},

	speed: 1000,
});