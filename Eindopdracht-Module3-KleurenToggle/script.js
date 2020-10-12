let body = document.querySelector('.main')
let dropdownBtn = document.querySelector(".navbar-dropbtn")
let dropDown = document.querySelector('.sidebar-dropdown')
let dropdownContent = document.querySelector('.sidebar-dropdownContent')
let innerText = document.querySelector('.colorText h1')
var allBtns = document.querySelectorAll('.sidebar-dropdownContent ul li button');
var buttons = Array.from(allBtns);



let hide = () => {
    dropdownContent.classList.add('hide')
    dropdownContent.classList.remove('show')
}

let show = () => {
    dropdownContent.classList.add('show')
    dropdownContent.classList.remove('hide')
}

//Show and hide menu on hover
dropdownBtn.addEventListener('mouseenter', show)
dropdownBtn.addEventListener('mouseleave', hide)
dropDown.addEventListener('mouseenter', show)
dropDown.addEventListener('mouseleave', hide)




// Change background color
// Change active state button ("radioButton")
// change inner HTML text
// Hide menu when clicked
buttons.forEach(function (button, index) {
    button.addEventListener('click', function (e) {
        if (index === 0) {
            body.style.backgroundColor = 'red';
            buttons.forEach((button, index) => index === 0 ? button.classList.add('activeState') : button.classList.remove('activeState'))
            innerText.innerHTML = 'Red';
            hide()
        }
        else if (index === 1) {
            body.style.backgroundColor = 'orange';
            buttons.forEach((button, index) => index === 1 ? button.classList.add('activeState') : button.classList.remove('activeState'))
            innerText.innerHTML = 'Orange';
            hide()
        }
        else if (index === 2) {
            body.style.backgroundColor = 'purple';
            buttons.forEach((button, index) => index === 2 ? button.classList.add('activeState') : button.classList.remove('activeState'))
            innerText.innerHTML = 'Purple';
            hide()
        }
        else {
            body.style.backgroundColor = 'green';
            buttons.forEach((button, index) => index === 3 ? button.classList.add('activeState') : button.classList.remove('activeState'))
            innerText.innerHTML = 'Green';
            hide()
        }

    });
});

