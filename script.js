let img_array = ['img/arch1.png', 'img/arch2.png', 'img/arch3.png'];
let img_id =  document.getElementById("img-id");
let x = 0;
img_id.src = img_array[x];

let forward = document.getElementById("forward");
let backward = document.getElementById("backward");

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

