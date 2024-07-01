let img_array = ['img/arch1.png', 'img/arch2.png', 'img/arch3.png'];
const img_id =  document.getElementById("img-id");
let x = 0;
img_id.src = img_array[x];

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

forward.addEventListener('click', () => {    
    if (x < img_array.length-1) {
        x += 1;
        img_id.src = img_array[x];        
    }
});

backward.addEventListener('click', () => {    
    if (x > 0) {
        x -= 1;
        img_id.src = img_array[x];    
    }
    
});


// Generate "dots" to show current picture position in Carousel

const dots_container = document.getElementById("dots-con");

function createDotElement(number) {
    for (let index = 0; index < number; index++) {
        let tag = document.createElement("div")
        tag.style.cssText = `
        width: 20px;
        height: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 50%
        `;
        dots_container.appendChild(tag);
    }    
}

createDotElement(img_array.length);


