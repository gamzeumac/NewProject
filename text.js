var cardNo1 = document.querySelector('.card1')


var isBlack = true;

window.addEventListener('click',

 (x)=>{

    console.log(x.target.getAttribute('class'))

    console.log(isBlack)

    if(isBlack  && x.target.getAttribute('class') == 'card-title' ){
        isBlack = false
        x.target.style.background = 'red'
    }else {
        isBlack = true
        x.target.style.background = '#fff'
    }

  
}
)
