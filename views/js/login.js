import { helpers } from './helpers.js';


let loginForm = document.querySelector(".form-login"),
	loginUsernameInput = document.querySelector("#input-text-login"),
	loginPasswordInput = document.querySelector("#input-password-login"),
	emptyInputMessage;


loginForm.addEventListener("submit", function() {
	// Handle empty input at login submission
	if (loginUsernameInput.value === "" || loginPasswordInput.value === "") {
		if (loginUsernameInput.value === "") {
			emptyInputMessage = document.querySelector(".message-empty-input[for=\"input-text-login\"]");
			emptyInputMessage.style.display = "block";
		}
		if (loginPasswordInput.value === "") {
			emptyInputMessage = document.querySelector(".message-empty-input[for=\"input-password-login\"]");
			emptyInputMessage.style.display = "block";
		}
		event.preventDefault();
	}
})

loginForm.addEventListener("input", function(event) {
	let eventTarget = event.target;

	// Handle live empty input at login
	if (eventTarget === loginUsernameInput) {
		emptyInputMessage = document.querySelector(".message-empty-input[for=\"input-text-login\"]");
		if (eventTarget.value === "") {
			emptyInputMessage.style.display = "block";
		} else {
			emptyInputMessage.style.display = "none";
		}
	}
	if (eventTarget === loginPasswordInput) {
		emptyInputMessage = document.querySelector(".message-empty-input[for=\"input-password-login\"]"	);
		if (eventTarget.value === "") {
			emptyInputMessage.style.display = "block";
		} else {
			emptyInputMessage.style.display = "none";
		}
	}
	


});








