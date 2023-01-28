const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const img = document.querySelector('img')


window.addEventListener("DOMContentLoaded", () => {
    img.src = images[0]
})

let i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if( i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return img.setAttribute('src', images[i]);
}





// const prevBtn = document.querySelectorAll('#prev-button')
// const nextBtn = document.querySelectorAll('#next-button')

// function  startSlide (){
//     if()
// }


// for(let i = 0; i < images.length; i++){
//  documentq.uerySelector('img').addEventListener("click", () =>{
//  startSlide ();
//  });
// }





   
