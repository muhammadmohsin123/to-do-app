var input = document.querySelector('input');
var button = document.getElementById('btn');
var ul = document.querySelector('ul');


function todo() {
    if (input.value.length > 0) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } else {
        "";
    }

}
function inputentered(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } else {
        "";

    }
}

button.addEventListener('click', todo)

input.addEventListener('keypress', inputentered)
