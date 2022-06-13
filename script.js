const greet = document.querySelector('#greetText');
console.log(greet)

function textAnim(element) {
    const letter = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(letter);
    letter.forEach((letter,i) => {
        setTimeout(() => element.innerHTML += letter, 75*i)
    });
}

textAnim(greet);