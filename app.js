// console.log("you clicked to:" +i)
const arrows = document.querySelectorAll('.arrow');
const arrowLeft = document.querySelectorAll('.arrow-left');
const movieLists = document.querySelectorAll('.movie-list');
const ball = document.querySelector('.toggle-ball');
const container = document.querySelectorAll('.container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle');

arrows.forEach((arrow, i)=>{
    const itemLength = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener('click',()=>{
    const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemLength - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
               -300}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";       
            clickCounter = 0;
        }
    });

    // console.log(movieLists[i].querySelectorAll("img").length)
    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value)
});


arrowLeft.forEach((left, i)=>{
    const itemLength = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;
    left.addEventListener('click',()=>{
        clickCounter--;
        if(itemLength + (4 - clickCounter) <= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
               +300}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";       
            // clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
    
    // console.log(movieLists[i].querySelectorAll("img").length)
    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value)
});





// ==============TOGGLE================//
ball.addEventListener('click', ()=>{
    container.forEach(item=>{
        item.classList.toggle('active')
    })
ball.classList.toggle('active')
})