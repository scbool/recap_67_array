let even = true

// creare array con i numeri da 0 a 19
const numbers = [];
for (let i = 0; i < 20; i++) {
    numbers.push(i)
}

const parent = document.getElementById('parent')

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { // pari
        parent.innerHTML += `<li class="active">${numbers[i]}</li>`
    } else {
        parent.innerHTML += `<li>${numbers[i]}</li>`
    }
}

const listItems = document.querySelectorAll('li')

const button = document.querySelector('#button')
button.addEventListener('click', function(){
    if (even === true) { // la volta scorsa abbiamo colorato i pari
        for (let i = 0; i < listItems.length; i++) {
            if (numbers[i] % 2 === 0) {
                listItems[i].classList.remove('active')
            } else {
                listItems[i].classList.add('active')
            }
        }
    } else { // la volta scorsa abbiamo colorato i dispari
        for (let i = 0; i < listItems.length; i++) {
            if (numbers[i] % 2 === 0) {
                listItems[i].classList.add('active')
            } else {
                listItems[i].classList.remove('active')
            }
        }
    }
    even = !even
})