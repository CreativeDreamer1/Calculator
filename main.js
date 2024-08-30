document.addEventListener('DOMContentLoaded', () => {

	const buttons = document.querySelectorAll("input[type='button']");
	const display = document.querySelector('#display');
	let decimalFlag = false;
    let completeFlag = false;

	buttons.forEach(button => {

		button.addEventListener('click', () => {
			const num = button.value;

			if (num == 'AC') {
				display.value = "";
				decimalFlag = false;

			} else if (num == '=') {
				display.value = eval(display.value);
                completeFlag = true;

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
                if (completeFlag === true) {
                    display.value = "";
                    display.value += num;
                    completeFlag = false;

                } else {
				    display.value += num;
                }
			};
		});
	});

});
