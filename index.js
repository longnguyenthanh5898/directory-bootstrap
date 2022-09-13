var backgroundImage = document.getElementById("slide")


const backgroundURL = [
    "https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1501621965065-c6e1cf6b53e2.jpg",
    "https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1519974719765-e6559eac2575.jpg",
    "https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1519974719765-e6559eac2575.jpg",
    "https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1534850336045-c6c6d287f89e.jpg"
]
var counter = 0; 
var maxImage = 4; 
setInterval(function() {
    backgroundImage.style.backgroundImage = `url(${backgroundURL[counter]})`
    if (counter + 1 == maxImage) {
        counter = 0; //reset to start
    } else {
        ++counter; //iterate to next image
    }
}, 5000);