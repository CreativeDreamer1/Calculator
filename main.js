document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll("input[type='button']");
    const display = document.querySelector('#display');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const num = button.value;

            if (num == 'AC') {
                display.value = "";
            } else if (num == '=') {
                display.value = eval(display.value);
            } else {
                display.value += num;
            };

        });
    });

});
