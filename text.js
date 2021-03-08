var cardNo1 = document.querySelector('.card1')


var isBlack = true;

window.addEventListener('click',

 (x)=>{

    console.log(x.target.getAttribute('class'))

    console.log(isBlack)

    if(isBlack  && x.target.getAttribute('class') == 'card-title' ){
        isBlack = false
        x.target.style.background = '#000'
    }else {
        isBlack = true
        x.target.style.background = '#fff'
    }

  
}
)



fetch('https://avatars.githubusercontent.com/u/77327491?v=4')
.then(result => {
    imageUrl = result.url
    
    var newDiv = `
    <img src="${imageUrl}" ></img>
    `

    document.querySelector('.team').innerHTML = newDiv

})
fetch('https://avatars.githubusercontent.com/u/77107747?v=4')
.then(result => {
    imageUrl = result.url
    
    var newDiv = `
    <img src="${imageUrl}" ></img>
    `

    document.querySelector('.team1').innerHTML = newDiv

})
fetch('https://avatars.githubusercontent.com/u/62600527?v=4')
.then(result => {
    imageUrl = result.url
    
    var newDiv = `
    <img src="${imageUrl}" ></img>
    `

    document.querySelector('.team2').innerHTML = newDiv

})


