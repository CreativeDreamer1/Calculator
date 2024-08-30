document.addEventListener('DOMContentLoaded', () => {

	const buttons = document.querySelectorAll("input[type='button']");
	const display = document.querySelector('#display');
	let decimalFlag = false;

	buttons.forEach(button => {

		button.addEventListener('click', () => {
			const num = button.value;

			if (num == 'AC') {
				display.value = "";
				decimalFlag = false;

			} else if (num == '=') {
				display.value = eval(display.value);

			} else if (num == '.') {
				if (decimalFlag == false) {
					display.value += num;
					decimalFlag = true;

				} else {
					display.value += "";
				};

			} else {
				if (button.className === 'spec') {
					decimalFlag = false;
				};

				display.value += num;
			};
		});
	});

});
