const images = document.querySelectorAll('.img-12-min');
let count = 0;

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;


function nextFunction() {
    if(count < 5){
        count += 1;
    }
    else{
        count = 0;
    }
    images.forEach(element => {
        if(count == element.getAttribute('data')){
            element.classList.add('active');
            document.querySelector('.top').src = element.src;
        }
        else{
            element.classList.remove('active');
        }
    });
}

function prevFunction() {
    if(count > 0){
        count -= 1;
    }
    else{
        count = 5;
    }
    images.forEach(element => {
        if(count == element.getAttribute('data')){
            element.classList.add('active');
            document.querySelector('.top').src = element.src;

        }
        else{
            element.classList.remove('active');
        }
    });
}
