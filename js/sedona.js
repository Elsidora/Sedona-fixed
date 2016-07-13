var btn = document.querySelector(".search-hotel-js");
var popup = document.querySelector(".search-form");
var check = popup.querySelector("[name=check-in]");
var overlay = document.querySelector(".modal-overlay");


btn.addEventListener("click", function(event) {
	if(popup.classList.contains("search-form-open")) {
		popup.classList.remove("search-form-open");
		overlay.classList.remove("modal-overlay-open");
	} else {
		event.preventDefault();
	popup.classList.add("search-form-open");
	check.focus();
	overlay.classList.add("modal-overlay-open");	
	}
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		
	  if (popup.classList.contains("search-form-open")) {	
		  popup.classList.remove("search-form-open");
		  overlay.classList.remove("modal-overlay-open");
		}
	}
});