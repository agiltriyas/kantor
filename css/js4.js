const thumb = document.querySelectorAll('.pic-thumb');

thumb.forEach(function(e){
	e.addEventListener('click', function(){
		$('.pic-mas').addClass('op');
		const src = e.getAttribute('src');
		$('.pic-mas').attr('src',src)
	})
})
