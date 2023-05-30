let x = document.getElementByClassName('btn');
let y = document.getElementByClassName('div');

    for(let i = 0; i < x.length; i++){
        x[i].addEventListener('click', function() {
            for(let j = 0; j < y.length; j++) {
                y[j].classList.remove('div-active');
            }
            y[j].classList.add('div-active');
        });
    }