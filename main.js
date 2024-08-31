document.addEventListener('DOMContentLoaded', () => {

	const buttons = document.querySelectorAll("input[type='button']");
	const display = document.querySelector('#display');
	let decimalFlag = false;
    let completeFlag = false;
	let operatorFlag = false;
	
	buttons.forEach(button => {

		button.addEventListener('click', () => {
			const num = button.value;

			if (num === 'AC') {
				display.value = "0";
				decimalFlag = false;
				operatorFlag = true;

			} else if (num === '=') {
				display.value = eval(display.value);
                completeFlag = true;
				operatorFlag = true;

			} else if (num === '.') {
				if (decimalFlag === false) {
					display.value += num;
					decimalFlag = true;

				} else {
					display.value += "";
				};

			} else if (button.className === 'spec') {
				decimalFlag = false;
				if (operatorFlag === true) {
					display.value += "";

				} else {
					display.value += num;
					operatorFlag = false;
				};
				operatorFlag = true;

			} else {
                if (completeFlag === true) {
                    display.value = num;
                    completeFlag = false;
					operatorFlag = false;

                } else if (display.value == 0) {
					display.value = num;
				}
				
				else {
				    display.value += num;
					operatorFlag = false;
                };
			};
		});
	});

});
