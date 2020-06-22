let checkbox = document.querySelector('.switcher-checkbox');
let form = document.querySelector('.form');
checkbox.oninput = function () {
    if (this.checked == true) {
        form.classList.add('form-dark');
    } else {
        form.classList.remove('form-dark');
    };
}